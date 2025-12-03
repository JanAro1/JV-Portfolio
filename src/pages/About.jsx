import React from 'react';
import './About.css';

const About = () => {
  const handleViewResume = () => {
    // Open resume in new tab
    window.open('/resume.pdf', '_blank');
  };

  const handleDownloadResume = () => {
    // Create a temporary link to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'John_Vincent_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about-container">
      <div className="about-content">
        {/* Header Section */}
        <div className="about-header">
          <h1 className="about-title">About Me</h1>
          <p className="about-subtitle">Get to know more about my journey and aspirations</p>
        </div>

        {/* Main Content Grid */}
        <div className="about-grid">
          {/* Left Column - Main Info */}
          <div className="about-main">
            <div className="about-section">
              <h2 className="section-title">Who I Am</h2>
              <div className="section-content">
                <p>
                  I'm a Bachelor of Science in Information Technology student at Cordova Public College, 
                  aspiring to become a software developer while also creating clean video edits and cinematic shots.
                </p>
                <p>
                  I'm passionate about building practical, user-centered solutions across both code and visuals. 
                  My journey in tech is driven by a curiosity to create meaningful digital experiences that 
                  solve real-world problems.
                </p>
              </div>
            </div>

            <div className="about-section">
              <h2 className="section-title">What I Do</h2>
              <div className="section-content">
                <p>
                  My focus spans from writing clean, efficient code to crafting visually stunning content. 
                  I believe in the power of combining technical skills with creative vision to deliver 
                  solutions that are both functional and beautiful.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Info Cards */}
          <div className="about-sidebar">
            <div className="info-card">
              <div className="card-icon">🎓</div>
              <h3 className="card-title">Education</h3>
              <p className="card-text">
                Bachelor of Science in Information Technology
              </p>
              <p className="card-subtext">Cordova Public College</p>
            </div>

            <div className="info-card">
              <div className="card-icon">💻</div>
              <h3 className="card-title">Focus Areas</h3>
              <div className="card-tags">
                <span className="tag">Software Development</span>
                <span className="tag">Web Design</span>
                <span className="tag">Video Editing</span>
                <span className="tag">UI/UX</span>
              </div>
            </div>

            <div className="info-card resume-card">
              <div className="card-icon">📄</div>
              <h3 className="card-title">Resume</h3>
              <p className="card-text">View or download my resume</p>
              <div className="resume-buttons">
                <button 
                  className="resume-btn view-btn"
                  onClick={handleViewResume}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2.5C6.41667 2.5 3.41667 4.16667 1 7.5C3.41667 10.8333 6.41667 12.5 10 12.5C13.5833 12.5 16.5833 10.8333 19 7.5C16.5833 4.16667 13.5833 2.5 10 2.5ZM10 10.8333C8.38889 10.8333 7.08333 9.52778 7.08333 7.91667C7.08333 6.30556 8.38889 5 10 5C11.6111 5 12.9167 6.30556 12.9167 7.91667C12.9167 9.52778 11.6111 10.8333 10 10.8333Z" fill="currentColor"/>
                  </svg>
                  <span>View Resume</span>
                </button>
                <button 
                  className="resume-btn download-btn"
                  onClick={handleDownloadResume}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2.5V12.5M10 12.5L6.25 8.75M10 12.5L13.75 8.75M2.5 15V16.25C2.5 16.913 3.03705 17.5 3.75 17.5H16.25C16.913 17.5 17.5 16.913 17.5 16.25V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
