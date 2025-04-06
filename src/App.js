import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Education from "./components/Education/Education";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";


const App = () => {
  return (
    <div className="maindiv">
      <div>
        <Navbar />
      </div>

      <Hero />
      <About />
      <Services />
      <Education />
      <Project />
      <Contact />
    
    </div>
  );
};

export default App;
