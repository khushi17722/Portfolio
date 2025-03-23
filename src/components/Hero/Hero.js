import React from "react";
import "./Hero.css";
import { FaInstagram, FaLinkedin  ,FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <header id="header" className="blur-effect">
      <div className="section-wrapper header-container">
        <div className="column intro-container blur-effect">
          <div className="header-info">
            <div className="header-info-top">
              Hello, I'm <span className="color-primary"></span>
            </div>
            <div className="header-info-middle">
              <div className="primary-title header-title large-text">
                Khushi Jain
              </div>
              <div className="title">Web Developer</div>
              <p className="text-muted header-description">
                I am a Visual Designer with a strong focus on digital branding.
                My goal is to attract, inspire, and create designs that leave a
                lasting impact, motivating people to engage with meaningful
                messages.
              </p>
            </div>
            <div className="hero-icons">
                    {/* GitHub Icon */}
      <a href="https://github.com/khushi17722" target="_blank" rel="noopener noreferrer" className="icon">
        <FaGithub size={24} />
      </a>
             
              {/* <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="icon">
                <FaTwitter size={24} />
              </a> */}
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="icon">
                <FaLinkedin size={24} />
              </a>
              {/* <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" className="icon">
        <FaEnvelope size={24} />
      </a> */}
 <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icon">
                <FaInstagram size={24} />
              </a>

 

            </div>
          </div>
        </div>
        <div className="column profile-wrapper">
          <div
            className="profile-photo-container"
            style={{ height: "350px", width: "350px" }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMmLQ1liZsB1dJTPSd_hBBdasqOFNXgv-7AA&s"
              className="profile-photo"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
