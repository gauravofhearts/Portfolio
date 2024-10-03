import React from 'react';
import './ProjectCard.css';

const Portfollio = [
  {
    title: 'Hotel Website',
    image: '/Images/hotel-website.jpg',
    description: 'HTML/CSS/Bootstrap5 and JavaScript.',
  },
  {
    title: 'Responsive Landing Page',
    image: '/Images/landing-page.jpg',
    description: 'HTML/CSS/Bootstrap5',
  },
  {
    title: 'Calculator App',
    image: '/Images/calculator-app.jpg',
    description: 'HTML/CSS/JavaScript',
  },
  {
    title: 'Blog Website',
    image: '/Images/blog.jpg',
    description: 'HTML/CSS/Bootstrap5 and JavaScript',
  },
];

const ProjectCard = () => {
  return (
    <div className="project-card-container">
      {Portfollio.map((project) => (
        <div className="project-card" key={project.title}>
          <img src={project.image} alt={project.title} className="project-image" />
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
