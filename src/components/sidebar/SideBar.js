import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './SideBar.scss';
import imageList from '../../imgs/imageList.js'

function SideBar() {
  return (
    <div className="sidebar">
      <img className = "profile" src= {imageList[9]} alt="Avatar"/>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
