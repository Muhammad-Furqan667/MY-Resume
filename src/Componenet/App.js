import { useRef } from "react";
import "../style.css";
import "../home.css";
import "../service.css";
import Services from "./Services";
import Stack from "./Stack";
import Project from "./Project";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Home from "./Home";
import NavBar from "./NavBar";

export default function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const projectRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactMeRef = useRef(null);
  const stackRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <NavBar
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToServices={() => scrollToSection(servicesRef)}
        scrollToProject={() => scrollToSection(projectRef)}
        scrollToAboutMe={() => scrollToSection(aboutMeRef)}
        scrollToContactMe={() => scrollToSection(contactMeRef)}
        scrollToStack={() => scrollToSection(stackRef)}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={stackRef}>
        <Stack />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={contactMeRef}>
        <ContactMe />
      </div>
    </div>
  );
}
