import React from 'react';
import './App.css';

const Education = () => {
  return (
    <div className="DIV home-section">
      <div className="about-me-container">
        <div className="section-content">
          <h1>Education</h1>
          <p className="education-details">
            <strong>Bachelor of Engineering (B.E) in Artificial Intelligence & Machine Learning</strong> <br />
            Sri Eshwar College of Engineering | <span className="highlight">CGPA: 7.73</span> (2023-2027) <br /><br />
            
            <strong>Higher Secondary Certificate (HSC)</strong> <br />
            AVP Trust National Matric Higher Secondary School | <span className="highlight">84.83%</span> (2021-2023) <br /><br />
            
            <strong>Secondary School Leaving Certificate (SSLC)</strong> <br />
            AVP Trust National Matric Higher Secondary School | <span className="highlight">All Pass</span> (2020-2021)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
