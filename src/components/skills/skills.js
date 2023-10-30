import React from 'react'
import './skills.scss';

function skills() {
  return (
    <div className='container3 info'>
      <h1 className='mainTitle'>Skills</h1>
      <div className='projContainer'>
        <h1 className='subtitle'>Programming Languages:</h1>
        <h1 className='projdesc'>● Java, JavaScript, TypeScript, Python, 
        C, C#, C++, HTML, CSS, Haskell
        </h1>
      </div>
      <div className='projContainer'>
        <h1 className='subtitle'>Frameworks:</h1>
        <h1 className='projdesc'>● React, Express.js, BootStrap, Node.js, Unity
        </h1>
      </div>
      <div className='projContainer'>
        <h1 className='subtitle'>Database:</h1>
        <h1 className='projdesc'>● MongoDB
        </h1>
      </div>
      <div className='projContainer'>
        <h1 className='subtitle'>Tools:</h1>
        <h1 className='projdesc'>● PostMan, SwaggerHub, Visual Studio, Git 
        </h1>
      </div>
      <div className='projContainer'>
        <h1 className='subtitle'></h1>
        <h1 className='projdesc'>
          
        </h1>
      </div>
    </div>
  )
}

export default skills;