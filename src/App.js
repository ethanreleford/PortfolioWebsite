import React from 'react';
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import Sidebar from "./components/sidebar/SideBar.js";
import './App.scss';
import Home from './components/home/home.js';
import Education from './components/education/education.js';
import Projects from './components/projects/projects.js';
import Skills from './components/skills/skills.js';
import About from './components/about/about.js';

function App() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });
  return (
    <body>   
      <Sidebar />
      <Home />
      <Education/>
      <Projects/>
      <Skills/>
      <About/>
    </body>
    
  );
}

export default App;