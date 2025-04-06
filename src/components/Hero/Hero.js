import React from 'react';
import './Hero.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero" id='Home'>
      <div className="hero-left">
        <div className="tag">JENNA ORTEGA</div>
        <h1>HAY! I’M JENNA</h1>
        <h2>I’M A <span>DESIGNER</span><span className="cursor">|</span></h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
          Indulgence way everything joy alteration boisterous the attachment.
        </p>

        <div className="btn-social">
          <button>GET IN TOUCH →</button>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="mailto:your@email.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMmLQ1liZsB1dJTPSd_hBBdasqOFNXgv-7AA&s" alt="" />
        </div>
        <div className="line-bg"></div>
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
      </div>
    </section>
  );
};

export default Hero;
