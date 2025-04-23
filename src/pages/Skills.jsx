import React from 'react';
import './Skills.css'; // Style file

function Skills() {
  return (
    <div className="skills-section">
      <h1>Skills</h1>

      <div className="skills-container">
        {/* HTML */}
        <div className="skill-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
            alt="HTML"
            className="skill-icon"
          />
          <h3>HTML</h3>
          <p>
            Passionate about crafting clean, responsive, and user-friendly web experiences with HTML.
            Building structured, accessible, and SEO-friendly web pages with clean and semantic HTML.
          </p>
        </div>

        {/* CSS */}
        <div className="skill-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
            alt="CSS"
            className="skill-icon"
          />
          <h3>CSS</h3>
          <p>
            Creating visually appealing, responsive, and modern web designs with CSS, focusing on
            layouts, animations, and user experience.
          </p>
        </div>

        {/* JavaScript */}
        <div className="skill-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            alt="JavaScript"
            className="skill-icon"
          />
          <h3>JavaScript</h3>
          <p>
            Developing interactive, efficient, and dynamic web solutions with JavaScript, focusing on
            functionality, performance, and user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
