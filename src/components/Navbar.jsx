import React, { useState, useEffect } from 'react';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import './Navbar.css';

const Navbar = ({ onNavClick, currentSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Update isDesktop on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = ['home', 'about', 'education', 'projects', 'contact'];

  const handleClick = (section) => {
    onNavClick(section);
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="logo">DAGI</div>

      {isDesktop ? (
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item}
              href="#!"
              onClick={() => handleClick(item)}
              style={{ fontWeight: currentSection === item ? 'bold' : 'normal' }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      ) : (
        <>
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <BiX size={30} /> : <BiMenuAltRight size={30} />}
          </div>
          {menuOpen && (
            <div className="nav-links mobile">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#!"
                  onClick={() => handleClick(item)}
                  style={{ fontWeight: currentSection === item ? 'bold' : 'normal' }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;
