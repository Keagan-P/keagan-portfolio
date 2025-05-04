import React from 'react';
import './AboutMe.css';
import ProfileImage from '../pictures/KeaganPortfolio.jpg' 
import cvFile from '../CV/KeaganCV.pdf';


const AboutMe = () => {
  return (
    <div className="about-me-container" id="about">
      <div className="about-me-content">
        <div className="about-me-text">
          <h2>About Me</h2>
          <h3>User Interface And User Experience Design</h3>
          <p>
            I am a User Interface and Experience Designer with a strong foundation
            in front-end development.<br></br>
            My expertise lies in designing intuitive and
            visually engaging digital experiences that enhance usability and
            accessibility.
            <br /><br />
            With a background in HTML and CSS, I am now expanding my skill set
            with JavaScript to develop interactive and dynamic web applications.<br></br>
            I am committed to creating seamless and user-centric designs that align
            with modern web standards and best practices.
            <br /><br />
            My goal is to bridge the gap between design and functionality, ensuring
            that every digital product I work on is both aesthetically refined and
            highly usable.
          </p>
          <a href={cvFile} download="Your_CV.pdf" className="download-cv-button">
            Download CV
          </a>
        </div>
        <div className="about-me-image">
          <img src={ProfileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;