import { useState, useEffect } from "react";

export default function NavBar({
  scrollToHome,
  scrollToServices,
  scrollToProject,
  scrollToAboutMe,
  scrollToContactMe,
  scrollToStack,
}) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className="nav"
      style={{
        top: showNavbar ? "0" : "-80px", // hide and show by moving top
      }}
    >
      <h3 onClick={scrollToHome}>Muhammad Furqan</h3>
      <p onClick={scrollToHome}>Home</p>
      <p onClick={scrollToServices}>Services</p>
      <p onClick={scrollToStack}>My Stack</p>
      <p onClick={scrollToProject}>Project</p>
      <p onClick={scrollToAboutMe}>About</p>
      <p onClick={scrollToContactMe}>Contact</p>
    </div>
  );
}
