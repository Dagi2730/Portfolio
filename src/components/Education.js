import React, { useState, useEffect } from 'react';
import './Education.css';

const fullText =
  "I  am studying Software Engineering at Adama Science And Technology University and continuously learning through online platforms like freeCodeCamp, Udemy, and real-world projects. I'm a lifelong learner, constantly exploring new tools and frameworks.";

const Education = () => {
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
    <section id="education" className="education-section">
      <h2>Education</h2>
      <p className="typing">{displayedText || ''}</p>
    </section>
  );
};

export default Education;
