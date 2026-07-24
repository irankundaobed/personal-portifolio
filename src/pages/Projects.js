import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { initialProjects } from '../data/initialData';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Always load fresh data from initialData.js
    console.log('Loading projects:', initialProjects);
    localStorage.setItem('portfolio-projects', JSON.stringify(initialProjects));
    setProjects(initialProjects);
  }, []);

  const categories = ['all', 'live', 'upcoming'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.status === filter);

  return (
    <div className="projects">
      <section className="section">
        <div className="container">
          <h1 className="section-title fade-in">My Projects</h1>
          <p className="section-subtitle fade-in">Showcasing my work and experiments</p>

          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card card fade-in">
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                  <span className={`project-status ${project.status}`}>
                    {project.status === 'live' ? '🟢 Live' : '🚧 Upcoming'}
                  </span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.expectedLaunch && (
                    <p className="expected-launch">
                      <strong>Expected Launch:</strong> {project.expectedLaunch}
                    </p>
                  )}
                  <div className="project-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        GitHub
                      </a>
                    )}
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Live Demo
                      </a>
                    ) : (
                      <span className="coming-soon-badge">Coming Soon</span>
                    )}
                    <Link to={`/projects/${project.id}`} className="btn btn-secondary">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
