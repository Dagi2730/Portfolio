import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'ANDITOURS',
    description:
      'ANDITOURS is a responsive travel website designed to showcase the beauty and cultural richness of Ethiopia. Developed using HTML, CSS, and JavaScript, it offers users an intuitive platform to explore various destinations, plan trips, and access essential travel information.',
    github: 'https://github.com/Dagi2730/ANDITOURS',
  },
  {
    title: 'Portfolio Website',
    description:
      "This portfolio website showcases my skills and projects, built using HTML, CSS, and JavaScript. It's fully responsive and easy to navigate.",
    github: 'https://github.com/Dagi2730/portfolio',
  },
  {
    title: 'AIChat BOT',
    description:
      'AIchatBot is a lightweight web-based chatbot application created using HTML, CSS, and JavaScript. This project demonstrates the fundamentals of building an interactive AI chatbot interface without relying on backend technologies or external APIs.',
    github: 'https://github.com/Dagi2730/AIchatBot',
  },
  {
    title: 'Shoppy',
    description:
      'Shoppy is an e-commerce frontend project built with React and Tailwind CSS featuring product listings, cart functionality, and a clean UI design.',
    github: 'https://github.com/Dagi2730/Shoppy',
  },
  {
    title: 'Music Player',
    description:
      'A modern, responsive music player web app built with Html, CSS and JavaScript. Features include playlist management, playback controls, and a visually appealing UI.',
    github: 'https://github.com/Dagi2730/music-player.git',
  },
  {
    title: 'To-Do List',
    description:
      'A simple and intuitive to-do list application developed with React. It supports task creation, completion toggling, and deletion with persistent state.',
    github: 'https://github.com/Dagi2730/To-Do-List',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map(({ title, description, github }, index) => (
          <div className="project-item" key={index}>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
