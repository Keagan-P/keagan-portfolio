import React from 'react';
import '../styles/Footer.css';
import logo from'../pictures/KPlogo.png'

function Footer() {
    return (
      <footer>
        <div className="logo">
          <img src={logo} alt="Keagn Potgieter Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact me</a></li>
          </ul>
        </nav>
      </footer>
    );
  }
  
  export default Footer;