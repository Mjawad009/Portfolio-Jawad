import React from "react";
import { metrics } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Metrics = () => {
  useGSAP(() => {
    gsap.from(".metric-item", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".metrics-container",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="metrics-container px-6 py-12 md:py-16 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* Professional Impact */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full md:w-auto">
          {metrics.slice(0, 2).map((metric, index) => (
            <div key={index} className="metric-item flex flex-col items-center text-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">{metric.value}</span>
              <span className="text-[10px] md:text-lg uppercase tracking-[0.2em] text-black/50 font-light mt-1">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Divider Line */}
        <div className="hidden md:block w-px h-16 bg-black/10" />
        <div className="md:hidden w-1/4 h-px bg-black/10" />

        {/* Languages */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full md:w-auto">
          {metrics.slice(2, 4).map((metric, index) => (
            <div key={index + 2} className="metric-item flex flex-col items-center text-center">
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">{metric.value}</span>
              <span className="text-[10px] md:text-sm uppercase tracking-[0.2em] text-black/50 font-light mt-1">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
