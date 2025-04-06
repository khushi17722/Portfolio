import React from "react";
import './Contact.css'; // External stylesheet

const ContactForm = () => {
  return (
    <div className="page-wrapper">
      <div className="contact-container">
        <div className="contact-card">
          {/* Left Side */}
          <div className="contact-left">
            <img
              src="https://via.placeholder.com/300x400"
              alt="Profile"
              className="profile-img"
            />
            <div className="contact-info">
              <p>WRITE AN E-MAIL</p>
              <h4>sample@domain.com</h4>
              <p>CALL ME</p>
              <h4>+044 9696 9696 3636</h4>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="contact-right">
            <h2>Let’s Discuss Your Project</h2>
            <p>Always available for freelancing if the right project comes along. Feel free to contact me.</p>
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea placeholder="Message"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </div>
        </div>
      </div>

      {/* Footer outside contact-container */}
      <footer className="contact-footer">
        © 2025 Your Name. All rights reserved.
      </footer>
    </div>
  );
};

export default ContactForm;
