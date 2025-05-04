import React from 'react';
import './HeroSection.css';
import ProfileImage from '../pictures/KeaganPortfolio.jpg';
import { FaGithub, FaInstagram, } from 'react-icons/fa';
import cvFile from '../CV/KeaganCV.pdf';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-greeting">Hi I am</h1>
          <h2 className="hero-name">Keagan Potgieter</h2>
          <p className="hero-title">UI/UX designer</p>
          <div className="hero-social">
            <a href="https://github.com/Keagan-P" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/keagan_pgt/?api=postMessage" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
          <div className="hero-buttons">
            <a href={cvFile} download="KeaganPotgieterCV.pdf" className="button secondary-button">
             Download CV
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Experiences</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Project done</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">80+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={ProfileImage} alt="Keagan Potgieter" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;