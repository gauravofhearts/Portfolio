import React from 'react';
import './About.css';
import Title from '../components/Title/Title';
import SubTitle from '../components/Title/SubTitle';

const About = () => {
  return (
    <>
      <Title text="Welcome to About Page!"/>
      <SubTitle text="An About Us page is a section on a website that provides information
                     about a company, organization, or individual."/>
      <div className="about-container">
        
      <div className="about-left">
        <img src="/Images/Gaurav Srivastav.jpeg" alt="About Me" className="about-image" />
      </div>

      <div className="about-right">
        <h2>Hello, Everyone...</h2>
        <p>
          Hi, I'm Gaurav Srivastav, a software and web developer fresher. I'm passionate about developing
          user-friendly, responsive web applications using modern technologies like React, JavaScript, and more.
        </p>
        <button className="contact-button" onClick={() => window.location.href = '/contact'}>
          Contact Us
        </button>
      </div>
    </div>
    </>
    
  );
};

export default About;
