import React, { useState } from "react";
import "./Contact.css"; // Importing the CSS file
import { div } from "framer-motion/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.email && formData.message) {
      setSubmitted(true);
      console.log("Form Submitted:", formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="img-container">
      <div className="contact-container">
        <h3 className="contact-heading">We Love to Hear You</h3>
        <h2 className="contact-subheading">Contact</h2>
        <div className="contact-box">
          {submitted ? (
            <p className="success-message">
              Thank you for reaching out! We'll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button className="btn" type="submit">
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
