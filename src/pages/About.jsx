import React from 'react';

function About() {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
      padding: '50px',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>About Me</h1>
      <p style={{
        maxWidth: '800px',
        margin: '0 auto',
        fontSize: '1.2rem',
        lineHeight: '1.8',
        textAlign: 'justify',
      }}>
        Hi, I'm <strong>Saheer</strong>, a passionate web developer dedicated to creating clean, user-friendly websites.
        I specialize in front-end development using HTML, CSS, and JavaScript, and I’m constantly learning new skills
        to stay on top of the latest trends in web development. With a love for problem-solving and building interactive
        user experiences, I enjoy working on projects that challenge me to think creatively and improve my coding skills.
        I’m always looking for opportunities to collaborate, learn from others, and push the boundaries of what I can do.
      </p>
    </div>
  );
}

export default About;


// pages/About.jsx 