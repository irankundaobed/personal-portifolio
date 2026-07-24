import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>IRANKUNDA Obed</h3>
            <p>Full Stack Developer passionate about creating amazing web experiences.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/blogs">Blogs</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com/irankundaobed" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                GitHub
              </a>
              <a href="https://www.instagram.com/heis_kid_/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                Instagram
              </a>
              <a href="https://www.linkedin.com/in/irankunda-obed-a7520a402/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="https://x.com/ObedIranku34744" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} IRANKUNDA Obed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
