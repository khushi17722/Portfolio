import React from "react";
import "./About.css"; // Import the external CSS file


// const statsData = [
//   { number: 11, label: "Total Projects" },
//   { number: 7, label: "Certificates" },
//   { number: 3, label: "Years of Experience" }
// ];

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">✨ Transforming ideas into digital experiences. ✨</p>

        <div className="content-wrapper">
          <div className="text-content">
            <h1 className="main-title">
             <span className="highlight">Khushi Jain</span>
            </h1>
            <p className="description">
              Seorang siswa Teknik Jaringan Komputer dan Telekomunikasi yang tertarik dalam pengembangan Front-End.
              Saya berfokus pada menciptakan pengalaman digital yang menarik dan selalu berusaha memberikan solusi terbaik.
            </p>
            <div className="buttons">
              <button className="btn btn-primary">Download CV</button>
              <button className="btn btn-secondary">View Projects</button>
            </div>
          </div>

          <div className="image-wrapper">
            <div className="profile-photo-container1">
              <img src="profile-placeholder.jpg" alt="Profile" className="profile-photo" />
            </div>
          </div>
        </div>

        {/* <div className="stats">
      {statsData.map((stat, index) => (
        <div key={index} className="stat-box">
          <p className="stat-number">{stat.number}</p>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div> */}
    </div>
    
    </section>
  );
};

export default About;
