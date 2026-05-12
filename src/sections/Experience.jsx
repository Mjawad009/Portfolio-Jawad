import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { experienceData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Experience = () => {
  const text = `A timeline of my professional journey in data analytics, where I've built intelligent systems and delivered strategic insights.`;
  const experienceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px

  useGSAP(() => {
    experienceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);

  return (
    <section id="experience" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Professional Journey"}
        title={"Experience"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {experienceData.map((exp, index) => (
        <div
          ref={(el) => (experienceRefs.current[index] = el)}
          key={index}
          className="sticky px-6 sm:px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(experienceData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex flex-col gap-6 font-light">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
              <h2 className="text-3xl lg:text-4xl font-normal">{exp.role}</h2>
              <p className="text-gold text-lg md:text-xl">{exp.period}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-2 text-white/60 text-lg uppercase tracking-widest">
              <p>{exp.company}</p>
              <p>{exp.location}</p>
            </div>
            <p className="text-xl leading-relaxed text-white/80 italic">
              {exp.description}
            </p>
            <div className="flex flex-col gap-4 text-lg sm:text-xl lg:text-2xl text-white/70">
              {exp.points.map((point, pIndex) => (
                <div key={`point-${index}-${pIndex}`} className="flex gap-4">
                  <span className="text-gold">•</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
