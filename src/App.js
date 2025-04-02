import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div style={{ margin: 0, padding: 0, boxSizing: "border-box", overflow: "hidden" }}>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
