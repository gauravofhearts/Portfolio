import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; 
import Home from './pages/Home'; 
import About from './pages/About';
import Skills from './pages/Skills';
import Portfollio from './pages/Portfollio';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/scrolltoTop';


const App = () => {
  return (
    <>
    <Router>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfollio" element={<Portfollio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App