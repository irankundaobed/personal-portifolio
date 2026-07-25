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
      year: '2023 - 2025',
      degree: 'Secondary in Software Development',
      institution: 'Secondary',
      description: 'Focused on software development, automation, and web technologies.'
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
                I'm a Full-Stack Developer who enjoys building scalable, user-focused web applications from concept to deployment. 
                I work across both frontend and backend development using modern technologies, and I adapt quickly to new frameworks, 
                languages, and tools whenever a project demands them.
              </p>
              <p>
                I believe great software is more than just writing code. 
                I help transform ideas into practical solutions by advising on project architecture, 
                identifying the right technologies, improving user experience, and delivering clean, 
                maintainable, and reliable applications.
              </p>
              <p>
                My strengths include :
              </p>
                <ul>
                  <li>Learning new technologies quickly and applying them effectively.</li>
                  <li>Building high-quality, responsive, and scalable web applications.</li>
                  <li>Advising businesses and teams on the best technical approach for their projects.</li>
                  <li>Testing software to identify bugs, improve performance, and ensure a smooth user experience.</li>
                  <li>Writing clean, maintainable, and efficient code that is built for long-term growth.</li>
                </ul>
                <p>
                Whether it's creating a new product, improving an existing system, 
                or validating software before release, I focus on delivering solutions that are reliable, 
                secure, and built to solve real business problems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or writing technical articles to share knowledge with the developer community.
              </p>
              
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>1+</h3>
                  <p>Live Projects</p>
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
