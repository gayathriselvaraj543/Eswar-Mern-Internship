import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  return (
    <div>
      <header className="header">
        <h1>GAYATHRI S</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p><strong>Phone:</strong> 6379006081</p>
        <p><strong>Email:</strong> gayathri.s2023aiml@sece.ac.in</p>
      </section>

      <section id="education" className="section">
        <h2>Education</h2>
        <div className="education-item">
          <strong>B.E AIML</strong> - Sri Eshwar College of Engineering | 7.73 (2023-2027)
        </div>
        <div className="education-item">
          <strong>HSC</strong> - AVP Trust National Matric Higher Secondary School | 84.83% (2021-2023)
        </div>
        <div className="education-item">
          <strong>SSLC</strong> - AVP Trust National Matric Higher Secondary School | All Pass (2020-2021)
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Vehicle Parking System</h3>
          <p>Implement a vehicle parking system that manages the availability of parking spots, tracks vehicle details, and calculates parking fees. Use collections for managing parking spots, inheritance for different vehicle types, and file handling for saving parking records.</p>
          <p><strong>Programming language:</strong> Java, <strong>Core:</strong> DBMS</p>
        </div>
        <br></br>
       
        <div className="project">
          <h3>Recipe Recommendation System</h3>
          <p>Create a console-based application to recommend recipes based on ingredients a user has on hand. Users can input available ingredients, and the system will provide a list of possible recipes. Core Java will manage input handling, recommendation logic, and file handling, while MySQL will store recipe data and ingredient information.</p>
          <p><strong>Programming language:</strong> Java, <strong>Core:</strong> DBMS</p>
        </div>
      </section>
      <br></br>
       
        <br></br>
      <section id="certifications" className="section">
        <h2>Certifications</h2>
        <div className="certification-item">Introduction in C - Sololearn</div>
        <div className="certification-item">Mastering in Data Structures - Udemy</div>
        <div className="certification-item">Pandas - Kaggle</div>
        <div className="certification-item">Matplotlib - Great Learning</div>
        <div className="certification-item">Introduction to ML – Kaggle</div>
        <div className="certification-item">SQL(Basics) – Hackerank</div>
        <div className="certification-item">Java (Basics) - Skillrack</div>
      </section>
      <br></br>
      
      <section id="achievements" className="section">
        <h2>Achievements</h2>
        <div className="achievement-item">CodeChef: Rating – 12657</div>
        <div className="achievement-item">CodeFiesta: 3rd Prize (C Language)</div>
        <div className="achievement-item">HackerRank: 5* in Python, C | 3* in C++</div>
        <div className="achievement-item">LeetCode: Solved 70 Problems</div>
      </section>

        
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-item">
          <strong>Languages:</strong> C | Python | HTML | CSS | JavaScript | Java
        </div>
        <div className="skills-item">
          <strong>Core:</strong> Data Structures and Algorithms | OOPS | DBMS
        </div>
        <div className="skills-item">
          <strong>Tools:</strong> VSCode | PyCharm | Canva | GitHub | CodeBlocks | MySQL Workbench | Eclipse
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Gayathri S. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
