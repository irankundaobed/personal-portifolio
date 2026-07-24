import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolio-projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      const defaultProjects = [
        {
          id: 1,
          title: 'E-Commerce Platform',
          description: 'Full-stack e-commerce solution with React, Node.js, and SQL database.',
          category: 'fullstack',
          technologies: ['React', 'Node.js', 'Express', 'SQL'],
          image: '🛒',
          github: 'https://github.com',
          live: 'https://example.com'
        },
        {
          id: 2,
          title: 'Task Management App',
          description: 'Collaborative task management tool with real-time updates.',
          category: 'frontend',
          technologies: ['React', 'TailwindCSS', 'JavaScript'],
          image: '✅',
          github: 'https://github.com',
          live: 'https://example.com'
        },
        {
          id: 3,
          title: 'API Service',
          description: 'RESTful API service for content management.',
          category: 'backend',
          technologies: ['Node.js', 'Express', 'PHP', 'SQL'],
          image: '🔌',
          github: 'https://github.com',
          live: ''
        },
        {
          id: 4,
          title: 'Portfolio Template',
          description: 'Responsive portfolio template with modern design.',
          category: 'frontend',
          technologies: ['React', 'CSS', 'JavaScript'],
          image: '💼',
          github: 'https://github.com',
          live: 'https://example.com'
        },
        {
          id: 5,
          title: 'Blog CMS',
          description: 'Content management system for blogging with admin panel.',
          category: 'fullstack',
          technologies: ['React', 'Node.js', 'SQL'],
          image: '📝',
          github: 'https://github.com',
          live: 'https://example.com'
        },
        {
          id: 6,
          title: 'Weather App',
          description: 'Real-time weather application with location search.',
          category: 'frontend',
          technologies: ['React', 'JavaScript', 'API Integration'],
          image: '🌤️',
          github: 'https://github.com',
          live: 'https://example.com'
        }
      ];
      localStorage.setItem('portfolio-projects', JSON.stringify(defaultProjects));
      setProjects(defaultProjects);
    }
  }, []);

  const categories = ['all', 'fullstack', 'frontend', 'backend'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
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
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Live Demo
                      </a>
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
