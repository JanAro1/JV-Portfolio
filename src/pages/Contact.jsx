import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:arojohnvincent53@gmail.com';
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/JanAro30', '_blank');
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Header Section */}
        <div className="contact-header">
          <div className="contact-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
              <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            I'm excited to connect and explore opportunities together. Let's discuss how we can create something impactful and meaningful.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="contact-cards">
          {/* Email Card */}
          <div className="contact-card" onClick={handleEmailClick}>
            <div className="card-icon email-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="card-label">Email</h3>
            <div className="card-value-wrapper">
              <p className="card-value">arojohnvincent53@gmail.com</p>
              <div className="card-underline"></div>
            </div>
          </div>

          {/* Facebook Card */}
          <div className="contact-card" onClick={handleFacebookClick}>
            <div className="card-icon facebook-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h3 className="card-label">Facebook</h3>
            <div className="card-value-wrapper">
              <p className="card-value">JanAro30</p>
              <div className="card-underline"></div>
            </div>
          </div>
        </div>

        {/* Call to Action Card */}
        <div className="cta-card">
          <h2 className="cta-title">Let's Work Together</h2>
          <p className="cta-description">
            Whether you're looking to bring a vision to life, need a collaborative partner for your next project, 
            or simply want to connect with a fellow creator, I'm here and ready to listen. Your ideas matter, 
            and together we can turn them into reality.
          </p>
          <div className="cta-footer">
            <div className="cta-info">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Philippines</span>
            </div>
            <div className="cta-info">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Available for Projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
