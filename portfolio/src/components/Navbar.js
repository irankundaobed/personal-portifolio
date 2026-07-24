import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">IRANKUNDA</span>
          <span className="logo-dot">.</span>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/skills" 
            className={`navbar-link ${isActive('/skills') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </Link>
          <Link 
            to="/projects" 
            className={`navbar-link ${isActive('/projects') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="/blogs" 
            className={`navbar-link ${isActive('/blogs') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Blogs
          </Link>
          <Link 
            to="/contact" 
            className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
