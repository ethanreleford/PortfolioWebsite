import React from 'react'
import './projects.scss'
import '../home/home.js'
import imageList from '../../imgs/imageList.js'


function projects() {
  return (
    <div className='container3 info'>
        <h1 className='mainTitle'>
            Projects
        </h1>
         <div className='projContainer'>
            <h1 className='projtitle'>LeetSocial | In Progress
            <a href = "https://github.com/thedeclancarter/LeetSocial" target="_blank" rel ="noreferrer">
            <img className = "links" src = {imageList[2]} alt= {"atom"} />
            </a>
            <a href = "http://www.leetsocial.com/" target="_blank" rel ="noreferrer">
            <img className = "links" src = {imageList[7]} alt= {"atom"} />
            </a>
            </h1>
            <h1 className='subtitle'>MERN Stack Web Application</h1>
            <h1 className='data'>Technologies: JavaScript, HTML, CSS, MongoDB, API's, SwaggerHub, PostMan
            </h1>
            <h1 className='projdesc'>● Developed and implemented MERN stack web application where users can see their leetcode friends statistics on coding problems
            </h1>
            <h1 className='projdesc'>● Created custom APIs and integrated open-source APIs from external sources, including those from the main LeetCode website
            </h1>
            <h1 className='projdesc'>● Interacted with MongoDB, contributing to data retrieval and display on the front end of the application
            </h1>
        </div>
        <div className='projContainer'>
            <h1 className='projtitle'>NeatBook 
            <a href = "https://github.com/ethanreleford/NeatBook" target="_blank" rel ="noreferrer">
            <img className = "links" src = {imageList[2]} alt= {"atom"} />
            </a>
            </h1>
            <h1 className='subtitle'>LAMP Stack Web Application</h1>
            <h1 className='data'>Technologies: JavaScript, HTML, CSS, 
            PHP, MySQL, JSON, API's, SwaggerHub, Linux
            </h1>
            <h1 className='projdesc'>● Led the front-end development of
             a collaborative project involving a team of 5 individuals 
             to produce a sophisticated ContactManager web application.
             </h1>
            <h1 className='projdesc'>● Used HTML, CSS, and JavaScript
             as the main technologies used for the front-end
            </h1>
            
            <h1 className=' projdesc'>
            ● Ensuring online accessibility and implemented
             a database using MySQL to hold user information
            </h1>
            <h1 className='projdesc'>● Retrieved and stored user information
             with various APIs and JSON files for easy accessibility
            </h1>
        </div>
         <div className='projContainer'>
            <h1 className='projtitle'>Weather Application
            <a href = "https://github.com/ethanreleford/Weather-Application" target="_blank" rel ="noreferrer">
            <img className = "links" src = {imageList[2]} alt= {"atom"} />
            </a>
            <a href = "https://weather-production.netlify.app/" target="_blank" rel ="noreferrer">
            <img className = "links" src = {imageList[7]} alt= {"atom"} />
            </a>
            </h1>
            <h1 className='data'>Technologies: JavaScript, HTML, CSS, 
            JSON, API's
            </h1>
            <h1 className='projdesc'>● Created simple weather application,
             establishing the use of api's and how to navigate through
             JSON files to display data effectively.
            </h1>
        </div>
            <div className='projContainer'>
            <h1 className='projtitle'>DeerMan | In Progress
            <a href = "https://github.com/ChrisThenKross/DeerMan" target="_blank" rel ="noreferrer">
            <img className = "links" src = {imageList[2]} alt= {"atom"} />
            </a>
            </h1>
            <h1 className='subtitle'>3D Unity Game</h1>
            <h1 className='data'>Technologies: Unity Game Engine,
            C#, Blender
            </h1>
            <h1 className='projdesc'>● Developed a 3D hack and slash genre game 
            where the player can interact with abilites and game objects throughout the map
            to fight their way past all the enemies.
            </h1>
        </div>
    </div>
  )
}


export default projects;