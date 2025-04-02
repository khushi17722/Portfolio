import React from "react";
import "./Hero.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <header id="hero-section">
      <div className="hero-container">
        {/* Text Content */}
        <div className="hero-text">
          <div className="hero-intro">
            Hello, I'm <span className="highlight-text"></span>
          </div>
          <div className="hero-title">
            <h1 className="hero-name">Khushi Jain</h1>
            <h2 className="hero-subtitle">Web Developer</h2>
            <p className="hero-description">
              I am a Visual Designer with a strong focus on digital branding.
              My goal is to attract, inspire, and create designs that leave a
              lasting impact, motivating people to engage with meaningful
              messages.
            </p>
          </div>
          <div className="hero-icons">
            {/* Social Icons */}
            <a href="https://github.com/khushi17722" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="hero-image">
          <div className="image-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMmLQ1liZsB1dJTPSd_hBBdasqOFNXgv-7AA&s"
              className="profile-image"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
