import React from 'react'
import { useRef } from 'react'
import "./navbar.css"

function Navbar() {

const navRef = useRef();

const showNavbar = ()=>{
  navRef.current.classList.toggle("active")
}

  return (
    <header>
        <div href="#" className="logo">N<span>a</span>resh<span>...</span></div>
 
        <div className="bx bx-menu" id="menu-icon" onClick={showNavbar}
></div>
        <ul className="navbar" ref={navRef}>
         
          <li><a href="">Home</a> </li>
          <li><a href="#about">About</a> </li>
          <li><a href="#skills">Skills</a> </li>
          {/* <li><a href="#education">Education</a> </li> */}
          <li><a href="#contact">Contact</a> </li>
        </ul>
    </header>
    )
}

export default Navbar
