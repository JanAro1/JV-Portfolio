import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Background decorative elements */}
      <div className="home-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="home-content">
        {/* Left section - Content wrapper */}
        <div className="home-text-wrapper">
          <div className="home-text-section">
            <div className="home-badge">
              <span className="badge-icon">👋</span>
              <span>Available for opportunities</span>
            </div>
            
            <div className="home-intro">
              <h1 className="home-greeting">Hello, I'm</h1>
              <h2 className="home-name">
                <span className="name-gradient">John Vincent</span>
              </h2>
              <div className="home-title-wrapper">
                <h3 className="home-title">Web Designer & Developer</h3>
                <div className="title-underline"></div>
              </div>
            </div>
          </div>

          {/* Bottom section - Description, buttons, social */}
          <div className="home-bottom-section">
            <p className="home-description">
              I specialize in creating beautiful, user-centered digital experiences 
              that combine elegant design with cutting-edge technology. Transforming 
              ideas into impactful web solutions.
            </p>

            <div className="home-cta-group">
              <Link to="/contact" className="home-contact-btn primary">
                <span>Get In Touch</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/projects" className="home-contact-btn secondary">
                View My Work
              </Link>
            </div>

            <div className="home-social-preview">
              <span className="social-label">Connect with me:</span>
              <div className="social-links-mini">
                <a href="https://github.com/JanAro1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/JanAro30" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image section - appears in middle on mobile */}
        <div className="home-image-section">
          <div className="image-decoration">
            <div className="decoration-ring ring-1"></div>
            <div className="decoration-ring ring-2"></div>
            <div className="decoration-ring ring-3"></div>
          </div>
          <div className="home-image-wrapper">
            <div className="image-glow"></div>
            <img 
              src="/profile.jpg" 
              alt="John Vincent" 
              className="home-image"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM4ODg4ODgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9maWxlIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
              }}
            />
          </div>
          
          {/* Floating tech badges */}
          <div className="floating-badge badge-1">
            <span>React</span>
          </div>
          <div className="floating-badge badge-2">
            <span>UI/UX</span>
          </div>
          <div className="floating-badge badge-3">
            <span>Design</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </div>
  );
};

export default Home;
