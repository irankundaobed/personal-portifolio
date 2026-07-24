import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedBlogs = localStorage.getItem('portfolio-blogs');
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    } else {
      const defaultBlogs = [
        {
          id: 1,
          title: 'Getting Started with React Hooks',
          excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components.',
          content: 'Full content here...',
          category: 'React',
          date: '2026-07-20',
          readTime: '5 min',
          image: '⚛️'
        },
        {
          id: 2,
          title: 'Building RESTful APIs with Node.js',
          excerpt: 'A comprehensive guide to creating robust REST APIs using Node.js and Express.',
          content: 'Full content here...',
          category: 'Backend',
          date: '2026-07-15',
          readTime: '8 min',
          image: '🔌'
        },
        {
          id: 3,
          title: 'TailwindCSS: Utility-First CSS Framework',
          excerpt: 'Discover the power of utility-first CSS and why TailwindCSS is gaining popularity.',
          content: 'Full content here...',
          category: 'CSS',
          date: '2026-07-10',
          readTime: '6 min',
          image: '🎨'
        },
        {
          id: 4,
          title: 'JavaScript ES6+ Features You Should Know',
          excerpt: 'Explore modern JavaScript features that will make your code cleaner and more efficient.',
          content: 'Full content here...',
          category: 'JavaScript',
          date: '2026-07-05',
          readTime: '10 min',
          image: '📜'
        },
        {
          id: 5,
          title: 'Database Design Best Practices',
          excerpt: 'Learn essential principles for designing efficient and scalable database schemas.',
          content: 'Full content here...',
          category: 'Database',
          date: '2026-07-01',
          readTime: '7 min',
          image: '💾'
        },
        {
          id: 6,
          title: 'Git Workflow for Teams',
          excerpt: 'Master Git branching strategies and collaboration workflows for team projects.',
          content: 'Full content here...',
          category: 'Tools',
          date: '2026-06-25',
          readTime: '9 min',
          image: '🔀'
        }
      ];
      localStorage.setItem('portfolio-blogs', JSON.stringify(defaultBlogs));
      setBlogs(defaultBlogs);
    }
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
