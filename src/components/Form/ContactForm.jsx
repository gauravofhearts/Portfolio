import React from 'react';
import './ContactForm.css';


// Contact Form Component
const ContactForm = () => {
  return (
    <div className="contact-container">
      <form className="contact-form">
        <h2>Get in Touch</h2>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" required />
        
        <label>Email:</label>
        <input type="email" placeholder="Your Email" required />
        
        <label>Message:</label>
        <textarea placeholder="Your Message" required></textarea>
        
        <button type="submit">Send Message</button>
      </form>
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
};

// Map Component
const Map = () => {
  return (
    <iframe
      title="Our Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1016307647374!2d77.37119297375229!3d28.62671598434794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5447d350e9f%3A0x4beba507fa3f455b!2sThe%20Iconic%20Corenthum!5e0!3m2!1sen!2sin!4v1727986326628!5m2!1sen!2sin"
      width="100%"
      height="500"
      style={{ border: '0' }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  );
};

export default ContactForm;
