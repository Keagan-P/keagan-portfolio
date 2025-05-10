import React, { useState } from 'react';
import '../styles/PortfolioSection.css';
import project1Image from '../pictures/projectimage1.jpeg';
import project2Image from '../pictures/projectimage2.jpeg';
import project3Image from '../pictures/projectImage3.jpeg';
import project4Image from '../pictures/projectImage4.jpeg';
import project5Image from '../pictures/projectImage5.jpeg';
import project6Image from '../pictures/projectImage6.jpeg';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    { name: 'Website UI/UX', category: 'Website Design', image: project1Image },
    { name: 'Website UI/UX', category: 'Website Design', image: project2Image },
    { name: 'Website UI/UX', category: 'Website Design', image: project3Image },
    { name: 'Figma Designs', category: 'Figma Design', image: project4Image },
    { name: 'Database Management', category: 'Database Design', image: project5Image },
    { name: 'Database Design', category: 'Database Design', image: project6Image },
  ];

  const filters = ['All', 'Website Design', 'Figma Design', 'Database Design'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="portfolio-section">
      <h2 id="portfolio">Portfolio</h2>
      <div className="filter-buttons">
        {filters.map((filter, index) => (
          <button
            key={index}
            className={filter === activeFilter ? 'active' : ''}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
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
