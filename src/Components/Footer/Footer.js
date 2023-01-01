import React from 'react'
import "./footer.css"

export const Footer = () => {
  return (
    <div className="footer">
        <h2>Naresh WebDev</h2>
        <div className="footer-social">
            <a href="#"><i className='bx bxl-facebook' ></i></a>
            <a href="#"><i className='bx bxl-twitter' ></i></a>
            <a href="#"><i className='bx bxl-instagram' ></i></a>
            <a href="#"><i className='bx bxl-youtube' ></i></a>
        </div>
    <div className="copyright">
        <p>Create By <a href="">Naresh</a> | All Right Reserved.</p>
    </div>
    </div>
  )
}
