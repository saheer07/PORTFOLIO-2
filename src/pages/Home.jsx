import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <img
        src="https://saheer07.github.io/PORTFOLIO/my.img.JPG"
        alt="Profile"
        className="profile-img-large"
      />

      <h1 className="title">SAHEER C</h1>

      
      <h3 className="role">I am a Web Developer</h3>

      <p className="description">
        "A passionate and dedicated junior web developer, driven by the
        ever-evolving world of technology and its limitless possibilities."
      </p>
    </div>
  );
}

export default Home;
