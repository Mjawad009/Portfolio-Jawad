import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "service-1",
    content: ["Data Engineering"],
    xPercent: 10,
  },
  {
    id: "service-2",
    content: ["Machine Learning", "AI Systems"],
    xPercent: -15,
  },
  {
    id: "service-3",
    content: ["Predictive Analytics", "LLMs", "Automation"],
    xPercent: 20,
  },
  {
    id: "service-4",
    content: ["Strategic Insights"],
    xPercent: -10,
  },
];

const ServiceSummary = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      services.forEach(({ id, xPercent }) => {
        gsap.to(`#${id}`, {
          xPercent,
          ease: "none",
          scrollTrigger: {
            trigger: `#${id}`,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="services"
      ref={containerRef}
      className="mt-20 mb-42 overflow-hidden text-center font-light leading-snug contact-text-responsive space-y-3"
    >
      {services.map(({ id, content }) => (
        <div key={id} className="overflow-hidden">
          <div
            id={id}
            className="flex flex-wrap justify-center items-center gap-3"
          >
            {content.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <p className="whitespace-nowrap">{item}</p>

                {index < content.length - 1 && (
                  <div className="h-1 w-10 md:w-32 bg-gold" />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceSummary;