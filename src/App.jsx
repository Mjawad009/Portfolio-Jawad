import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Metrics from "./sections/Metrics";
import ServiceSummary from "./sections/ServiceSummary";
import Experience from "./sections/Experience";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import NextSectionIndicator from "./components/NextSectionIndicator";

const App = () => {
  return (
    <ReactLenis root className="relative w-full min-h-screen overflow-x-hidden">
      <div className="opacity-100 transition-opacity duration-1000">
        <Navbar />
        <Hero />
        <Metrics />
        <ServiceSummary />
        <Experience />
        <About />
        <Projects />
        <TechStack />
        <Contact />
        <NextSectionIndicator />
      </div>
    </ReactLenis>
  );
};

export default App;
