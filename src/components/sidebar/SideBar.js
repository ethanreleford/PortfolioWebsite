import React from 'react';
import './SideBar.scss';

function SideBar({ setActiveSection }) {
  const handleItemClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => handleItemClick('Home')}>Home</li>
        <li onClick={() => handleItemClick('Education')}>Education</li>
        <li onClick={() => handleItemClick('Projects')}>Projects</li>
        <li onClick={() => handleItemClick('Skills')}>Skills</li>
        <li onClick={() => handleItemClick('About')}>About</li>
      </ul>
    </div>
  );
}

export default SideBar;
