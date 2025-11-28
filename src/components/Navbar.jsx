import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [activeLink, setActiveLink] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    setActiveLink(location.pathname);
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInsideMenu = menuRef.current && menuRef.current.contains(event.target);
      const isClickOnToggle = toggleRef.current && toggleRef.current.contains(event.target);
      
      if (isMobileMenuOpen && !isClickInsideMenu && !isClickOnToggle) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/scheduling', label: 'Scheduling' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMobileMenuOpen(false);
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => handleLinkClick('/')}>
          Portfolio
        </Link>
        
        <button 
          ref={toggleRef}
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul ref={menuRef} className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path} className="navbar-item">
              <Link
                to={link.path}
                className={`navbar-link ${activeLink === link.path ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="navbar-item">
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

