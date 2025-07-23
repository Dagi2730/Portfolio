import React, { useState, useEffect } from 'react';
import './About.css';

const fullText =
  "I am a frontend web developer passionate about creating clean, responsive, and user-friendly interfaces. I specialize in building interactive web applications using React, HTML, CSS, JavaScript, and Vue. Continuously learning and evolving, I strive to stay ahead in the ever-changing tech landscape by embracing new challenges and sharpening my skills every day.";

const About = () => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    function type() {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
        setTimeout(type, 40);
      }
    }

    type();
  }, []);

  return (
    <section className="about-section">
      <h2>About</h2>
      <p className="typing">{displayedText || ''}</p>
    </section>
  );
};

export default About;
