import React, { useState, useEffect } from 'react';
import Sidebar from "./components/sidebar/SideBar.js";
import './App.scss';
import Home from './components/home/home.js';
import Education from './components/education/education.js';
import Projects from './components/projects/projects.js';
import Skills from './components/skills/skills.js';
import About from './components/about/about.js';
import Contact from './components/contact/contact.js';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    // Scroll to the element with the activeSection ID when it changes
    const element = document.getElementById(activeSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <div className="app-container">
      <Sidebar setActiveSection={setActiveSection} />
      <Home id="Home" />
      <Education id="Education" />
      <Projects id="Projects" />
      <Skills id="Skills" />
      <About id="About" />
    </div>
  );
}

export default App;
