import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState('home'); // default visible is Hero

  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <>
      <Navbar onNavClick={handleNavClick} currentSection={currentSection} />
      <main style={{ width: '100%' }}>
        {currentSection === 'home' && <section id="home" className="home"><Hero /></section>}
        {currentSection === 'about' && <section id="about"><About /></section>}
        {currentSection === 'education' && <section id="education"><Education /></section>}
        {currentSection === 'projects' && <section id="projects" className="projects"><Projects /></section>}
        {currentSection === 'contact' && <section id="contact"><Contact /></section>}
      </main>
    </>
  );
}

export default App;
