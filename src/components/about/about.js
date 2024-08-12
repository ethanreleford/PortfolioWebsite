import React from 'react'
import './about.scss';

function about() {
  return (
    <div id = 'about'>
    <div className='container3 info'>
      <h1 className='mainTitle'>About</h1>
      <div className='projContainer'>
      <h3 className='descs'>
      My name is Ethan Releford, and I'm a senior majoring in Computer Science at the University of Central Florida.
      I enjoy creating small projects in various programming languages to expand my range of ideas. Currently, I'm
      actively seeking a software development internship for the summer of 2024. I anticipate my graduation to be
      fall of 2024.
      </h3>
      <h3 className='descs'>
      Throughout my academic journey, I've consistently engaged in personal projects.. These projects span various domains, from
       web development and mobile app creation to machine learning and data analysis. This diverse experience has allowed me to
      adapt to different challenges and cultivate an understanding of software development.
      </h3>
      </div>
    </div>
    </div>
  )
}

export default about;