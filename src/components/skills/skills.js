import React from 'react'
import './skills.scss';

function skills() {
  return (
    <div id = 'skills'>
    <div className='container3 info'>
      <h1 className='mainTitle'>Skills</h1>
      <div className='projContainer'>
        <h1 className='subtitle'>Programming Languages:</h1>
        <h1 className='projdesc'>● Java, JavaScript, TypeScript, Python, 
        C, C#, C++, HTML, CSS, Haskell
        </h1>
      </div>
      <div className='projContainer'>
        <h1 className='subtitle'>Project Framework Components:</h1>
        <h1 className='projdesc'>● React, Express.js, BootStrap, Node.js, Unity, Unreal
        </h1>
      </div>
      <div className='projContainer'>
        <h1 className='subtitle'>Database:</h1>
        <h1 className='projdesc'>● MongoDB, SQL
        </h1>
      </div>
      <div className='projContainer'>
        <h1 className='subtitle'>Tools:</h1>
        <h1 className='projdesc'>● PostMan, SwaggerHub, Visual Studio, Git 
        </h1>
      </div>
    </div>
    </div>
  )
}

export default skills;