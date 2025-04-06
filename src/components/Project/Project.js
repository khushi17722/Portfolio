import React from "react";
import "./Project.css"; // Ensure correct file name

const projects = [
  {
    id: 1,
    image: "https://via.placeholder.com/300",
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and styled-components.",
    livePreview: "#",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300",
    title: "E-commerce Store",
    description: "A fully responsive e-commerce platform with product listings and checkout.",
    livePreview: "#",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300",
    title: "Chat Application",
    description: "A real-time chat app using React, Node.js, and Socket.io.",
    livePreview: "#",
  },
  {
    id: 1,
    image: "https://via.placeholder.com/300",
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and styled-components.",
    livePreview: "#",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300",
    title: "E-commerce Store",
    description: "A fully responsive e-commerce platform with product listings and checkout.",
    livePreview: "#",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300",
    title: "Chat Application",
    description: "A real-time chat app using React, Node.js, and Socket.io.",
    livePreview: "#",
  }
];

const ProjectContainer = () => {
  return (
    <section className="project-section" id="projects">
    <div className="project-wrapper">
      <h3 className="portfolio-heading">Portfolio Showcase</h3>
      <h2 className="recent-projects-heading">Recent Projects</h2>
      <p className="projects-description">
        Explore my latest projects showcasing my skills in web development, design, and programming.
      </p>
      <div className="project-container">
        {projects.map((project) => (
          <div  key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.image} className="project-image" alt="Project" />
            </div>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-actions">
                <a href={project.livePreview} target="_blank" rel="noopener noreferrer" className="project-button">
                  Live Preview
                </a>
                <button className="project-button1">
                  <span>Details</span> 🔍
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ProjectContainer;
