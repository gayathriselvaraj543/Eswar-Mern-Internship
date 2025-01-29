import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Education from './Education';
import Projects from './Projects';
import Certifications from './Certifications';
import Skills from './Skills';
import Contact from './Contact';
import './App.css';
import Home from './Home.js'

function Nav() {
  return (
    <Router>
      <nav className='router'>
      
        <Link to="/Home">Home</Link>    
        <Link to="/education">Education</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path ='/Home' element={<Home/>}/>
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Nav;
