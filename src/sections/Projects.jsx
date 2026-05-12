import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Works = () => {
  const containerRef = useRef(null);
  const projectRefs = useRef([]);

  const text = `A selection of high-impact data systems, automated pipelines, and AI architectures engineered for precision and scale.`;

  useGSAP(() => {
    projectRefs.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        y: 100,
        rotateX: -15,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section id="projects" className="flex flex-col min-h-screen bg-white" ref={containerRef}>
      <AnimatedHeaderSection
        subTitle={"Engineered Solutions"}
        title={"Projects"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />

      <div className="flex flex-col gap-24 px-6 sm:px-10 py-20">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            className="group relative flex flex-col lg:flex-row gap-12 items-start border-t-2 border-black/10 pt-16 hover:border-black/40 transition-colors duration-500"
          >
            {/* ID & Tech */}
            <div className="flex flex-col gap-4 lg:w-1/4">
              <span className="text-6xl font-black text-black/5 group-hover:text-gold/20 transition-colors duration-500">
                {project.id}
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs uppercase tracking-widest px-3 py-1 bg-black/5 rounded-full font-light">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-8 lg:w-3/4">
              <div className="flex justify-between items-start gap-4">
                <h2 className="text-3xl md:text-5xl font-normal leading-tight max-w-2xl">
                  {project.name}
                </h2>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full border border-black/10 group-hover:bg-black group-hover:text-white transition-all duration-300 transform group-hover:rotate-45 cursor-pointer"
                >
                  <Icon
                    icon="lucide:arrow-up-right"
                    className="size-6 md:size-8"
                  />
                </a>
              </div>

              <p className="text-xl md:text-2xl text-black/60 italic font-light">
                {project.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {project.points.map((point, pIndex) => (
                  <div key={pIndex} className="flex gap-4 items-start py-4 border-b border-black/5 group-hover:border-black/10 transition-colors">
                    <span className="text-gold font-bold mt-1">/</span>
                    <p className="text-lg text-black/80 font-light leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
