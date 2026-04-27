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
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <div className="opacity-100 transition-opacity duration-1000">
        <Navbar />
        <Hero />
        <Metrics />
        <ServiceSummary />
        <Experience />
        <About />
        <Projects />
        <TechStack />
        <ContactSummary />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;
