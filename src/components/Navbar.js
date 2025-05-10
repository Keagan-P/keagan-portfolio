import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../pictures/KPlogo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" id="home">
      <div className="navbar-logo">
        <img src={logo} alt="KP Logo" className="logo-image" />
      </div>

      
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>

    
      <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
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

