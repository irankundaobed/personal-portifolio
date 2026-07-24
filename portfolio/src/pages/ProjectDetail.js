import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolio-projects');
    if (savedProjects) {
      const projects = JSON.parse(savedProjects);
      const foundProject = projects.find(p => p.id === parseInt(id));
      setProject(foundProject);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container section">
          <p>Project not found.</p>
          <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="project-header">
        <div className="container">
          <Link to="/projects" className="back-link">← Back to Projects</Link>
          <h1 className="project-title">{project.title}</h1>
          <p className="project-description-large">{project.description}</p>
          
          <div className="project-links-header">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View on GitHub
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-body">
        <div className="container">
          <div className="project-image-large">
            <span className="project-emoji">{project.image}</span>
          </div>

          <div className="project-content-detail">
            <div className="project-info-grid">
              <div className="info-card card">
                <h3>Category</h3>
                <p>{project.category}</p>
              </div>
              <div className="info-card card">
                <h3>Technologies</h3>
                <div className="tech-list">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-details-text">
              <h2>Project Overview</h2>
              <p>
                {project.title} is a comprehensive solution built using modern web technologies.
                This project showcases best practices in {project.category} development and
                demonstrates proficiency in {project.technologies.join(', ')}.
              </p>

              <h2>Key Features</h2>
              <ul>
                <li>Responsive and mobile-friendly design</li>
                <li>Clean and maintainable code structure</li>
                <li>Optimized performance and fast load times</li>
                <li>User-friendly interface with intuitive navigation</li>
                <li>Secure and scalable architecture</li>
              </ul>

              <h2>Technologies Used</h2>
              <p>
                This project leverages the following technologies and tools:
              </p>
              <div className="tech-details">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="tech-item card">
                    <h4>{tech}</h4>
                    <p>Used for building robust and scalable solutions.</p>
                  </div>
                ))}
              </div>

              <h2>Challenges & Solutions</h2>
              <p>
                During development, several challenges were encountered and successfully resolved:
              </p>
              <ul>
                <li>Implementing responsive design across all devices</li>
                <li>Optimizing database queries for better performance</li>
                <li>Ensuring cross-browser compatibility</li>
                <li>Managing state efficiently in the application</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                This project demonstrates the ability to build modern, scalable web applications
                using industry-standard tools and best practices. It serves as an excellent
                example of full-stack development capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
