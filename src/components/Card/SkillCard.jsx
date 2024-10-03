import React from 'react';
import './SkillCard.css';

const skills = [
  { title: 'HTML', image: '/Images/html-icon.png' },
  { title: 'CSS', image: '/Images/css-icon.png' },
  { title: 'JavaScript', image: '/Images/javascript-icon.png' },
  { title: 'Bootstrap', image: '/Images/bootstrap-icon.png' },
  { title: 'ReactJs', image: '/Images/react-icon.png' },
  { title: 'MySQL', image: '/Images/mysql-icon.png' },
  { title: 'WordPress', image: '/Images/wordpress-icon.png' }
];

const SkillCard = () => {
  return (
    <div className="skill-card-container">
      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          {/* Use skill.image instead of skill.img */}
          <img src={skill.image} alt={skill.title} className="skill-image" />
          <h3 className="skill-title">{skill.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
