import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>If you want to collaborate or ask questions, feel free to reach out using my accounts:</p>
      <div className="contact-details">
<p>
  <strong>Email:</strong>{' '}
  <a href="mailto:Dagmawitandargachew@gmail.com">
    Dagmawitandargachew@gmail.com
  </a>
</p>


<p>
  <strong>LinkedIn:</strong>{' '}
  <a href="https://www.linkedin.com/in/dagmawit-andargachew-b05140239" target="_blank" rel="noopener noreferrer">
    linkedin.com/in/dagmawit-andargachew-b05140239
  </a>
</p>

        <p><strong>Phone:</strong> +251946347779</p>
        <p><strong>Telegram:</strong> @unique</p>
      </div>
    </section>
  );
};

export default Contact;
