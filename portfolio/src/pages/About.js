import React from 'react';
import './About.css';

const About = () => {
  const experiences = [
    {
      year: '2023 - Present',
      title: 'Full Stack Developer',
      company: 'Freelance',
      description: 'Building modern web applications with React, Node.js, and various technologies.'
    },
    {
      year: '2022 - 2023',
      title: 'Frontend Developer',
      company: 'Tech Solutions',
      description: 'Developed responsive user interfaces and improved user experience.'
    }
  ];

  const education = [
    {
      year: '2020 - 2024',
      degree: 'Bachelor in Computer Science',
      institution: 'University',
      description: 'Focused on software development, algorithms, and web technologies.'
    }
  ];

  return (
    <div className="about">
      <section className="about-hero section">
        <div className="container">
          <h1 className="section-title fade-in">About Me</h1>
          <p className="section-subtitle fade-in">Get to know me better</p>
          
          <div className="about-content">
            <div className="about-text slide-in-left">
              <h2>Hello! I'm IRANKUNDA Obed</h2>
              <p>
                I'm a passionate Full Stack Developer with expertise in building modern web applications.
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p>
                My journey in web development started with a curiosity about how websites work,
                and it has evolved into a full-fledged passion for creating seamless digital experiences.
                I specialize in JavaScript technologies, particularly React for frontend and Node.js for backend.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or writing technical articles to share knowledge with the developer community.
              </p>
              
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-card">
                  <h3>3+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-card">
                  <h3>30+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
            
            <div className="about-image slide-in-right">
              <div className="image-placeholder">
                <div className="avatar">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item card fade-in">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{exp.year}</span>
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="education-section section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item card fade-in">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{edu.year}</span>
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
