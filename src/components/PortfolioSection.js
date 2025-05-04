import React from 'react';
import './PortfolioSection.css';
import project1Image from '../pictures/projectimage1.jpeg'; // Replace with your image paths
import project2Image from '../pictures/projectimage2.jpeg';
import project3Image from '../pictures/projectImage3.jpeg';
import project4Image from '../pictures/projectImage4.jpeg';
import project5Image from '../pictures/projectImage5.jpeg';
import project6Image from '../pictures/projectImage6.jpeg';

const PortfolioSection = () => {
  const projects = [
    {
      name: 'Project One',
      category: 'Website Design',
      image: project1Image,
    },
    {
      name: 'Project Two',
      category: 'Website Design',
      image: project2Image,
    },
    {
      name: 'Project Three',
      category: 'Website Design',
      image: project3Image,
    },
    {
      name: 'Project Four',
      category: 'Figma Design',
      image: project4Image,
    },
    {
      name: 'Project Five',
      category: 'Database Design', 
      image: project5Image,
    },
    {
      name: 'Project Six',
      category: 'Database Design',
      image: project6Image,
    },
   
  ];

  const filters = ['All', 'Website Design', 'App Mobile Design', 'App Desktop', 'Braiding']; // Add all your categories

  return (
    <div className="portfolio-section" id="portfolio">
      <h2>Portfolio</h2>
      <div className="filter-buttons">
        {filters.map((filter, index) => (
          <button key={index} className={filter === 'All' ? 'active' : ''}>
            {filter}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} />
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;