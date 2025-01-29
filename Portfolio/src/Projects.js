import React from 'react';
import './App.css';

const Projects = () => {
  return (
    <div className="DIV projects-section">
      <div className="about-me-container">
        <div className="section-content">
          <h1> Projects</h1>

          <div className="project-item">
            <p>
              <a
                href="https://github.com/gayathriselvaraj543/Vehicle-Parking-System"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong> Vehicle Parking System</strong> (2024)
              </a>
            </p>
            <p className="project-description">
            Implement a vehicle parking system that manages the availability of parking spots, tracks vehicle details, and calculates parking fees.<br />
            Use collections for managing parking spots, inheritance for different vehicle types, and file handling for saving parking records.
          </p>
            <h3>
              <strong>Programming language: Java, Core: DBMS</strong> 
            </h3>
          </div>

          <div className="project-item">
            <p>
              <a
                href="https://github.com/gayathriselvaraj543/Recipe-Recommendation-System"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong> Recipe Management System</strong> (2024)
              </a>
            </p>
            <p className="project-description">
            Create a console-based application to recommend recipes based on ingredients a user has on hand. Users can input available ingredients, and the system will provide a list of possible recipes.<br />
            Core Java will manage input handling, recommendation logic, and file handling, while MySQL will store recipe data and ingredient information.

            </p>
            <h3>
              <strong>Programming language: Java, Core: DBMS</strong>
            </h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
