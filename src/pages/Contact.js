import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [messages, setMessages] = useState([]);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const savedMessages = localStorage.getItem('portfolio-messages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newMessage = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString()
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem('portfolio-messages', JSON.stringify(updatedMessages));

    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    setTimeout(() => {
      setSubmitStatus('');
    }, 5000);
  };

  return (
    <div className="contact">
      <section className="section">
        <div className="container">
          <h1 className="section-title fade-in">Get In Touch</h1>
          <p className="section-subtitle fade-in">Let's discuss your project or just say hello</p>

          <div className="contact-content">
            <div className="contact-info slide-in-left">
              <h2>Contact Information</h2>
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:irankunda.obed@example.com">irankunda.obed@example.com</a>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📱</span>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+250123456789">+250 123 456 789</a>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h3>Location</h3>
                  <p>Kigali, Rwanda</p>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Me</h3>
                <div className="social-icons">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    GitHub
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    LinkedIn
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form card slide-in-right">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Discussion"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
