import React from "react";
import "./Services.css";
import { FaDatabase, FaCode, FaServer, FaLaptopCode, FaReact, FaPalette } from "react-icons/fa";
import { SiJavascript, SiNodedotjs, SiMongodb, SiFigma, SiBootstrap, SiTailwindcss } from "react-icons/si";

const services = [
  {
    id: 1,
    icon: <FaCode size={60} color="black" />,
    title: "Web Development",
    description: "Building responsive and modern web applications using HTML, CSS, JavaScript, and React."
  },
  {
    id: 2,
    icon: <SiJavascript size={60} color="black" />,
    title: "Programming Language",
    description: "C, C++, Java, and Python."
  },
  {
    id: 3,
    icon: (
      <>
        <SiBootstrap size={30} color="black" /> <SiTailwindcss size={30} color="black" />
      </>
    ),
    title: "CSS Framework",
    description: "Bootstrap, Tailwind CSS."
  },
  {
    id: 4,
    icon: <FaDatabase size={60} color="black" />,
    title: "Database",
    description: "MySQL, MongoDB."
  },
  {
    id: 5,
    icon: <SiNodedotjs size={60} color="black" />,
    title: "Back-End Development",
    description: "Node.js, Express.js, and PHP."
  },
  {
    id: 6,
    icon: <FaPalette size={60} color="black" />,
    title: "UI/UX Design",
    description: "Creating user-friendly and scalable designs using Figma."
  }
];

const MyServices = () => {
  return (
    <section className="services-section">
      <h3 className="section-subtitle">My Expertise</h3>
      <h2 className="section-title">My Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="icon-container">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyServices;
