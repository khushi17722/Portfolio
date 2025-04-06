import React from "react";
import "./About.css";


const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left">
          <div className="circle-bg left"></div>
          <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMmLQ1liZsB1dJTPSd_hBBdasqOFNXgv-7AA&s"
             alt="Profile" />
        </div>

        <div className="about-right">
          <div className="label">ABOUT US</div>
          <h1>
            I AM AVAILABLE FOR <span className="highlight">UI UX DESIGN</span> PROJECTS
          </h1>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero
            are also reproduced in their exact original form, accompanied by English versions from
            the 1914 translation by H. Rackham.
          </p>

          <div className="about-stats">
            <div className="stat-box">
              <strong>280+</strong>
              <br />
              Google Review
            </div>
            <div className="stat-box">
              <strong>15+</strong>
              <br />
              Years Experience
            </div>
            <div className="stat-box">
              <strong>49+</strong>
              <br />
              Award Winning
            </div>
          </div>

          <button className="contact-button">GET IN TOUCH →</button>
        </div>

        <div className="circle-bg right"></div>
      </div>
    </section>
  );
};

export default About;
