import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce website with modern UI/UX design featuring product browsing and add to cart functionality. Frontend-only implementation with smooth user experience.',
      tech: ['React', 'CSS3', 'JavaScript', 'Local Storage'],
      image: '/ecommercee.jpg',
      liveLink: 'https://eshop-app-one.vercel.app/',
      githubLink: 'https://github.com/JanAro1/Ecommerce-App',
      featured: true
    },
    {
      title: 'Profile Card Website',
      description: 'A sleek profile-card website, smooth animations, and responsive design showcasing my work and skills.',
      tech: ['React', 'CSS3', 'JavaScript'],
      image: '/ProfileCard.png',
      liveLink: null,
      githubLink: null,
      featured: true
    },
    {
      title: 'Video Editing Showcase',
      description: 'A collection of cinematic video edits and clean productions demonstrating my video editing skills and creative vision.',
      tech: ['Premiere Pro', 'After Effects', 'Color Grading'],
      image: '/video-editing.jpg',
      liveLink: 'https://drive.google.com/file/d/1GVXnoTdMm1cG_UykOeMwJ8TS46NNhINB/view?usp=sharing',
      githubLink: null,
      featured: true
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-header">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">A collection of my recent work showcasing my skills in web development and video editing</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzFhMWExYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9qZWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
                {(project.liveLink || project.githubLink) && (
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link live-link"
                          aria-label={`View ${project.title} live`}
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M11 3C10.4477 3 10 3.44772 10 4C10 4.55228 10.4477 5 11 5H13.5858L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L15 6.41421V9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9V4C17 3.44772 16.5523 3 16 3H11Z" fill="currentColor"/>
                            <path d="M5 5C3.89543 5 3 5.89543 3 7V15C3 16.1046 3.89543 17 5 17H13C14.1046 17 15 16.1046 15 15V12C15 11.4477 14.5523 11 14 11C13.4477 11 13 11.4477 13 12V15H5V7H8C8.55228 7 9 6.55228 9 6C9 5.44772 8.55228 5 8 5H5Z" fill="currentColor"/>
                          </svg>
                          <span>Live</span>
                        </a>
                      )}
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link github-link"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
                {project.featured && (
                  <div className="featured-badge">
                    <span>⭐ Featured</span>
                  </div>
                )}
              </div>
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-tags">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
