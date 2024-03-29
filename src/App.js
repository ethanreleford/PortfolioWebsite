import React from 'react';
import Sidebar from "./components/sidebar/SideBar.js";
import './App.scss';
import Home from './components/home/home.js';
import Education from './components/education/education.js';
import Projects from './components/projects/projects.js';
import Skills from './components/skills/skills.js';
import About from './components/about/about.js';
import Contact from './components/contact/contact.js';

function App() {


  return (
    <div className="app-container">
      <Sidebar/>
      <Home id = "home"/>
      <Education id = "education"/>
      <Projects/>
      <Skills />
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
