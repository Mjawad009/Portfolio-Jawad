import React from "react";
import { techStack, currentlyWorkingOn } from "../constants";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const TechStack = () => {
  return (
    <section id="techstack" className="min-h-screen bg-white py-20">
      <AnimatedHeaderSection
        subTitle={"The Engine Under the Hood"}
        title={"Tools & Technologies"}
        text={"A modern stack designed for high-performance data processing and intelligent automation."}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      
      <div className="px-6 sm:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
        {techStack.map((stack, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold uppercase tracking-wider border-b-2 border-black/10 pb-2">
              {stack.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {stack.items.map((item, i) => (
                <span key={i} className="px-4 py-2 bg-black text-white rounded-full text-sm uppercase tracking-widest font-light">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 sm:px-10 mt-32">
        <h3 className="text-3xl font-light uppercase tracking-widest mb-8">Currently Exploring</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentlyWorkingOn.map((item, index) => (
            <div key={index} className="flex items-center gap-4 text-xl md:text-2xl font-light border-l-4 border-gold pl-6 py-4 bg-black/5 hover:bg-black/10 transition-colors">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
