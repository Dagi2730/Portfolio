import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm Dagmawit Andargachew</h1>
        <h2>Frontend Web Developer</h2>
        <p>
          I craft clean, interactive, and responsive websites using React, Vue, HTML, CSS, and JavaScript.
        </p>
        <div className="hero-buttons">
          <a href="/Dagmawit-CV.pdf" download className="btn download-btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
