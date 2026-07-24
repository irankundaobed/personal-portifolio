import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';
import { initialBlogs } from '../data/initialData';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Always load fresh data from initialData.js
    console.log('Loading blogs:', initialBlogs);
    localStorage.setItem('portfolio-blogs', JSON.stringify(initialBlogs));
    setBlogs(initialBlogs);
  }, []);

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blogs">
      <section className="section">
        <div className="container">
          <h1 className="section-title fade-in">Blog</h1>
          <p className="section-subtitle fade-in">Thoughts, tutorials, and insights</p>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="blogs-grid">
            {filteredBlogs.map((blog) => (
              <article key={blog.id} className="blog-card card fade-in">
                <div className="blog-image">
                  <span className="blog-emoji">{blog.image}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-category">{blog.category}</span>
                    <span className="blog-date">{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <h2>{blog.title}</h2>
                  <p>{blog.excerpt}</p>
                  <div className="blog-footer">
                    <span className="read-time">⏱️ {blog.readTime} read</span>
                    <Link to={`/blogs/${blog.id}`} className="read-more">
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="no-blogs">
              <p>No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
