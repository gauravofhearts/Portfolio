import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isOpen ? 'show' : ''}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
            Gaurav Srivastav
          </Link>
          <button className="navbar-toggler" type="button" onClick={handleToggle} aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleLinkClick}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={handleLinkClick}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skills" onClick={handleLinkClick}>Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfollio" onClick={handleLinkClick}>Portfollio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={handleLinkClick}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
