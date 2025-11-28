import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { 
      name: 'HTML/CSS', 
      level: 90,
      description: 'Proficient in creating semantic HTML structures and responsive CSS layouts. Experienced with modern CSS features including Flexbox, Grid, and animations.',
      icon: '💻'
    },
    { 
      name: 'JavaScript', 
      level: 85,
      description: 'Strong foundation in JavaScript fundamentals, ES6+ features, and asynchronous programming. Capable of building interactive web applications.',
      icon: '⚡'
    },
    { 
      name: 'React', 
      level: 80,
      description: 'Experienced in building dynamic user interfaces with React. Knowledgeable in hooks, component lifecycle, state management, and React Router.',
      icon: '⚛️'
    },
    { 
      name: 'UI/UX Design', 
      level: 85,
      description: 'Understanding of user-centered design principles. Skilled in creating intuitive interfaces that prioritize user experience and accessibility.',
      icon: '🎨'
    },
    { 
      name: 'Responsive Design', 
      level: 90,
      description: 'Expert in creating mobile-first, responsive websites that work seamlessly across all devices and screen sizes using modern CSS techniques.',
      icon: '📱'
    },
    { 
      name: 'Figma', 
      level: 75,
      description: 'Proficient in using Figma for UI/UX design, prototyping, and creating design systems. Capable of translating designs into functional websites.',
      icon: '🖼️'
    },
    { 
      name: 'Video Editing', 
      level: 85,
      description: 'Skilled in creating clean video edits and cinematic shots. Experienced in video post-production, color grading, and storytelling through visuals.',
      icon: '🎬'
    },
    { 
      name: 'Adobe Premiere Pro', 
      level: 80,
      description: 'Proficient in video editing using Adobe Premiere Pro. Capable of creating professional video content with smooth transitions and effects.',
      icon: '✂️'
    },
    { 
      name: 'After Effects', 
      level: 75,
      description: 'Knowledgeable in motion graphics and visual effects using Adobe After Effects. Able to create dynamic animations and compositing.',
      icon: '✨'
    },
    { 
      name: 'Color Grading', 
      level: 90,
      description: 'Experienced in color correction and grading to achieve cinematic looks. Understanding of color theory and visual storytelling through color.',
      icon: '🌈'
    },
  ];

  return (
    <div className="skills-container">
      <div className="skills-content">
        <div className="skills-header">
          <h1 className="skills-title">Skills & Expertise</h1>
          <p className="skills-subtitle">A comprehensive overview of my technical and creative capabilities</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-card-header">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-header-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
              
              <p className="skill-description">{skill.description}</p>
              
              <div className="skill-bar-wrapper">
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
