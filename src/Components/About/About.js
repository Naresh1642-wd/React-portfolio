import React from 'react'
import Aboutimg from './Aboutimg.svg'
import "./about.css"

function About() {
  return (
<section className="about" id="about">
        <div className="heading">
            <h2>About Me</h2>
        </div>
        <div className="about-container">
            <div className="about-img">
                <img src={Aboutimg}alt="Loading"/>
            </div>
            <div className="about-text">
            <p>I am a self-taught JavaScript developer
currently pursuing bachelors degree in
Computer Engineering I've always found
coding intuitive and have pushed myself to
learn the most effective ways to achieve a
result.</p>
                <div className="information">
                    <div className="info-box">
                        <i className='bx bxs-user' ></i>
                        <span>Naresh Kumar</span>
                    </div>
                    <div className="info-box">
                        <i className='bx bxs-phone' ></i>
                        <span>+91 8838012912</span>
                    </div>
                    <div className="info-box">
                        <i className='bx bxs-envelope' ></i>
                        <span>nkfswebdev16@gmail.com</span>
                    </div>
                </div>
                <a href="#" className="btn">Download Cv</a>
            </div>
        </div>
    </section>  )
}

export default About