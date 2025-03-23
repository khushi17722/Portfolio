import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
};

export default App;
