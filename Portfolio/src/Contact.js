import React from 'react';
import './App.css';

const Contact = () => {
  return (
    <div className="DIV contact-section">
      <div className="contact-container">
        <div className="section-content">
          <h1>Contact Me</h1>
          <div className="contact-details">
            <p><strong>Phone :</strong> 6379006081</p>
            <p><strong>Email : </strong> 
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=gayathri.s2023aiml@sece.ac.in&su=Hello&body=I wanted to reach out...">gayathri.s2023aiml@sece.ac.in</a>

</p>

            <p>
              <a href="https://www.linkedin.com/in/gayathri-selvaraj-68a31329a/" target="_blank" rel="noopener noreferrer">
                <button>Visit My LinkedIn</button>
              </a>
            </p>
            <p>
              <a href="https://github.com/gayathriselvaraj543" target="_blank" rel="noopener noreferrer">
                <button>Visit My GitHub</button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
