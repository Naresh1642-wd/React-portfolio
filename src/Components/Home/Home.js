import React from 'react'
import  HomeImg from "./HomeImg.png" 
import "./home.css"

function Home() {
  return (
    <div className='home'>
      <div className="social">
            <a href='https://github.com/Naresh1642-wd' className='bx bxl-github'></a>
            <a href='' className='bx bxl-instagram'></a>
        </div>
        <div className="Home-container">
        <div className="home-text">
            <span>Hello, I'm</span>
            <h1>Naresh</h1>
            <h2>Web Developer</h2>
            <a className='btn'>Contact Me</a>
        </div>
        <div className="home-img">
          <img src={HomeImg} alt="homeimg"></img>      
        </div>
        </div>
    </div>
  )
}

export default Home;