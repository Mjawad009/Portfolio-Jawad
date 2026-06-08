import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: "home", label: "Home", next: "Metrics", nextId: "metrics" },
  { id: "metrics", label: "Metrics", next: "Services", nextId: "services" },
  { id: "services", label: "Services", next: "Experience", nextId: "experience" },
  { id: "experience", label: "Experience", next: "About", nextId: "about" },
  { id: "about", label: "About", next: "Projects", nextId: "projects" },
  { id: "projects", label: "Projects", next: "Contact", nextId: "contact" },
  { id: "contact", label: "Contact", next: "End", nextId: "" },
];

const NextSectionIndicator = () => {
  const [currentSection, setCurrentSection] = useState(sections[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section.id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setCurrentSection(section),
        onEnterBack: () => setCurrentSection(section),
      });
    });

    // Hide at the very bottom of the last section
    ScrollTrigger.create({
      trigger: "#contact",
      start: "bottom bottom",
      onEnter: () => setIsVisible(false),
      onLeaveBack: () => setIsVisible(true),
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  if (!isVisible || currentSection.next === "End") return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
      <Link
        to={currentSection.nextId}
        smooth={true}
        duration={1000}
        className="px-6 py-3 bg-black/50 backdrop-blur-md border border-white/10 rounded-full shadow-2xl flex items-center gap-3 relative overflow-hidden group cursor-pointer active:scale-95 transitio[...]
      >
        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-medium">
          Next Section
        </p>
        <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
        <p className="text-xs uppercase tracking-[0.1em] text-white font-bold">
          {currentSection.next}
        </p>
      </Link>
    </div>
  );
};

export default NextSectionIndicator;
