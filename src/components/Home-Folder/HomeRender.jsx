import ProjectCard from "../Card/ProjectCard"
import SkillCard from "../Card/SkillCard"
import ContactForm from "../Form/ContactForm"
import Title from "../Title/Title"

const HomeRender = () => {
  return (
    <div>
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
        <Title text="Skills"/>
        <SkillCard/>
        <Title text="Projects"/>
        <ProjectCard/>
        <Title text="Contact"/>
        <ContactForm/>
    </div>
  )
}

export default HomeRender