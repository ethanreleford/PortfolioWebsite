import React from 'react'
import './home.scss'
import imageList from '../../imgs/imageList.js'



function home() {
  return (
    <div id="home">
    <div className='container1 info'>
        <h1 className='name'>Ethan Releford</h1>
        <h2 className='subtitle'>Computer Science Student at the University of Central Florida</h2>
        <h2 className='subtitle'>Orlando, FL - ethanrele@gmail.com</h2>
        <h3 className='desc'>I am an enthusiastic Software Developer who enjoys building software and solving problems</h3>

        <a href = "https://github.com/ethanreleford" target="_blank" rel ="noreferrer"><img className = "professional" src = {imageList[2]} alt= {"atom"} /></a>
        <a href = "https://www.linkedin.com/in/ethan-releford/" target="_blank"  rel ="noreferrer"><img className = "professional" src = {imageList[8]} alt= {"atom"}/></a>

    </div>
    </div>
    
  )
}


export default home;