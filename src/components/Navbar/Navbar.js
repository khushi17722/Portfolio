import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollY = window.pageYOffset;

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150; // Offset for earlier highlight
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSection = sectionId;
        }
      });

      // Set "hero" active if near top
      if (!currentSection && scrollY < 200) {
        currentSection = "hero";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set active section on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Cyfonii</div>

      {/* Hamburger Menu */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a
            href="#hero"
            className={activeSection === "hero" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={activeSection === "services" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#education"
            className={activeSection === "education" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
