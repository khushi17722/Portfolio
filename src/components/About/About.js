import React from "react";
import "./About.css";
// import profileImage from "./profile-placeholder.jpg";
// import userAvatar from "./avatar-placeholder.jpg"; // Small profile image

const About = () => {
  return (
    <section className="about-section">
     <div>
     <p className="passion">Driven by Passion</p>
     </div>
       <p className="about-badge">About Me</p>
      <div className="container">
        <div className="content-wrapper">
          {/* Profile Image */}
          <div className="image-wrapper">
            <div className="profilephotocontainer">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMmLQ1liZsB1dJTPSd_hBBdasqOFNXgv-7AA&s"
              alt="Profile" className="profilephoto" />
            </div>
            <div className="experience-badge">3+ Years Experience</div>
          </div>

          {/* Text Content */}
          <div className="text-content">
           
            <h1 className="main-title">
            Innovative  And <span className="highlight">Passionate </span>   Designer
            </h1>
            <p className="description">
            Check out my latest projects and expertise in web design & development! Explore my portfolio to find innovative, user-friendly, and high-performing web solutions tailored to your needs. </p>
            <p className="description">
            Custom Web Development. 24/7 Support. Secure & Scalable Solutions. Get a Free Consultation.
            </p>
          
            <button className="button">MORE ABOUT →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
