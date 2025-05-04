import React from 'react';
import './ServicesSection.css'; // Create this CSS file
import ServiceCard from './ServiceCard';
import { FaCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa'; // Example icons

function ServicesSection() {
  const services = [
    {
      icon: <FaMobileAlt />,
      title: 'App Design',
      description: 'I design user-friendly and visually compelling mobile applications. My skills encompass the full design lifecycle, including user research, wireframing, prototyping, and visual design, resulting in high-quality and effective digital products.',
    },
    {
      icon: <FaCode />,
      title: 'App Interface',
      description: 'I specialize in designing app interfaces that seamlessly blend aesthetics and functionality. My approach involves careful consideration of visual hierarchy, typography, color palettes, and interaction patterns to create engaging and effective user interfaces that enhance brand perception and user satisfaction.',
    },
    {
      icon: <FaPaintBrush />,
      title: 'Figma Design',
      description: 'Figma is my primary tool for creating and collaborating on digital designs. I leverage its powerful features for UI design, prototyping, and design system management to streamline the design process and facilitate effective teamwork. My proficiency in Figma allows for rapid iteration and seamless handoff to development.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Database Design',
      description: 'I specialize in designing databases that ensure data accuracy, consistency, and security. My process involves carefully defining data entities, relationships, and constraints to create well-normalized and reliable database systems that support complex data operations and reporting needs.',
    },
    {
      icon: <FaCode />,
      title: 'Database Admin',
      description: 'My expertise in database administration encompasses the technical aspects of managing and maintaining database systems, including security implementation, performance optimization, and disaster recovery planning. I am dedicated to ensuring the reliability and security of organizational data.',
    },
    {
      icon: <FaPaintBrush />,
      title: 'Website Admin',
      description: 'As a Website Administrator, I ensure the smooth operation, security, and optimal performance of web platforms. My responsibilities include website updates, content management, user administration, security monitoring, and troubleshooting technical issues to maintain a positive user experience.',
    },
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Services</h2>
        <p>These are some of the services I offer</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;