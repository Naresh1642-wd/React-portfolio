import React from 'react';
import "./skills.css";
import skillimage from "./Skills.png"

const Skills = () => {
  return (
<section className="skills" id="skills">
        <div className="heading">
            <h2>Skills</h2>
            <span>My Skills</span>
        </div>
        <div className="skills-container">
            <div className="bars">
                <div className="bars-box">
                    <h3>React</h3>
                    <span>94%</span>
                    <div className="light-bar"></div>
                    <div className="percent-bar react-bar"></div>
                </div>
                <div className="bars-box">
                    <h3>Node&Express</h3>
                    <span>84%</span>
                    <div className="light-bar"></div>
                    <div className="percent-bar Node-bar"></div>
                </div>
                <div className="bars-box">
                    <h3>MongoDB</h3>
                    <span>74%</span>
                    <div className="light-bar"></div>
                    <div className="percent-bar Mongo-bar"></div>
                </div>
                <div className="bars-box">
                    <h3>Ui/Ux</h3>
                    <span>80%</span>
                    <div className="light-bar"></div>
                    <div className="percent-bar ui-bar"></div>
                </div>
            </div>
            <div className="skills-img">
                <img src={skillimage} alt="Image-Not_found"/>
            </div>
        </div>
 
    </section>
      )
}

export default Skills