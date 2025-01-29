import React from 'react';
import './App.css';
import me from './photo 4.jpg';
const Home = () => {
  return (
    <div className="DIV home-section">
      <div className="about-me-container">
        <div className="section-image">
          <img src={me} className="profile" alt="Profile" />
        </div>
        <div className="section-content">
          <h1>Hi.I am Gayathri!</h1>
          <h1>About Me</h1>
          <p>
            I am a second-year B.E. Artificial Intelligence and Machine Learning student<br/> 
            at Sri Eshwar College of Engineering. I have skills in programming languages like <br/>
            Java, Python, and C, along with knowledge in Data Structures, OOPs, and DBMS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
