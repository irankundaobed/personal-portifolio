import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">IRANKUNDA Obed</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              Crafting elegant solutions with React, Node.js, and modern web technologies.
              Passionate about building scalable applications and delivering exceptional user experiences.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">View My Work</Link>
              <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>
          </div>
          <div className="hero-image slide-in-right">
            <div className="code-window">
              <div className="window-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="code-content">
                <pre>
{`const developer = {
  name: "IRANKUNDA Obed",
  role: "Full Stack Developer",
  skills: [
    "React", "JavaScript",
    "Node.js", "Express",
    "TailwindCSS", "SQL"
  ],
  passion: "Building amazing things"
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-skills section">
        <div className="container">
          <h2 className="section-title">Core Technologies</h2>
          <div className="skills-grid">
            <div className="skill-card card">
              <div className="skill-icon">⚛️</div>
              <h3>Frontend</h3>
              <p>React, JavaScript, HTML, CSS, TailwindCSS</p>
            </div>
            <div className="skill-card card">
              <div className="skill-icon">🔧</div>
              <h3>Backend</h3>
              <p>Node.js, Express, PHP, SQL</p>
            </div>
            <div className="skill-card card">
              <div className="skill-icon">🎨</div>
              <h3>Design</h3>
              <p>Figma, UI/UX Design, Responsive Design</p>
            </div>
            <div className="skill-card card">
              <div className="skill-icon">🚀</div>
              <h3>Tools</h3>
              <p>Git, Version Control, Agile Development</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Build Something Amazing Together</h2>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities.</p>
            <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
