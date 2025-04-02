import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  // coding 
  
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Cyfonii</div>

      {/* Hamburger & Close Icon */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="/Home">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Services">Services</a></li>
        <li><a href="/Education">Education</a></li>
        <li><a href="/Project">Project</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
