import React from 'react';
import './Navbar.css'; // You can create a CSS file for styling

function Navbar() {
  return (
    <nav className="navbar" id="home">
      <div className="navbar-logo">
        
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About me</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact me</a></li>
      </ul>
      <div className="navbar-button">
      </div>
    </nav>
  );
}

export default Navbar;