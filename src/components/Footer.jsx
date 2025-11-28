import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-container">
        <div className="footer-social">
          <a 
            href="https://www.facebook.com/JanAro30" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            Facebook
          </a>
          <a 
            href="https://github.com/JanAro1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </div>
        <div className="footer-copyright">
          © 2025 John Vincent. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

