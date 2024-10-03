import React from 'react';
import './Footer.css'; // External CSS for styling
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            Intrested to work with us? Drop us a line!
            gauravofhearts@gmail.com
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/share/7ZcTCsaBZo8F8T5Z/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.linkedin.com/in/gaurav-srivastav-13b818262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">Linkedln</a>
            <a href="https://www.instagram.com/gauravofhearts?igsh=d3NteDY5aWEwaGpr" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy;2024 Gaurav Srivastav. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
