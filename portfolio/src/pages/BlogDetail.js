import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const savedBlogs = localStorage.getItem('portfolio-blogs');
    if (savedBlogs) {
      const blogs = JSON.parse(savedBlogs);
      const foundBlog = blogs.find(b => b.id === parseInt(id));
      setBlog(foundBlog);
    }
  }, [id]);

  if (!blog) {
    return (
      <div className="blog-detail">
        <div className="container section">
          <p>Blog post not found.</p>
          <Link to="/blogs" className="btn btn-primary">Back to Blogs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <div className="blog-header">
        <div className="container">
          <Link to="/blogs" className="back-link">← Back to Blogs</Link>
          <div className="blog-meta">
            <span className="blog-category">{blog.category}</span>
            <span className="blog-date">{new Date(blog.date).toLocaleDateString()}</span>
            <span className="read-time">⏱️ {blog.readTime} read</span>
          </div>
          <h1 className="blog-title">{blog.title}</h1>
        </div>
      </div>

      <div className="blog-body">
        <div className="container">
          <div className="blog-image-large">
            <span className="blog-emoji">{blog.image}</span>
          </div>
          
          <div className="blog-content-detail">
            <p className="lead">{blog.excerpt}</p>
            
            <div className="blog-text">
              <h2>Introduction</h2>
              <p>
                This is a detailed blog post about {blog.title.toLowerCase()}. In this article,
                we'll explore the key concepts, best practices, and practical examples to help
                you master this topic.
              </p>

              <h2>Key Concepts</h2>
              <p>
                Understanding the fundamentals is crucial for success. Let's break down the
                essential concepts that you need to know.
              </p>

              <h3>Concept 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>

              <h3>Concept 2</h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>

              <h2>Practical Examples</h2>
              <p>
                Let's dive into some practical examples to solidify your understanding.
              </p>

              <div className="code-block">
                <pre>
{`// Example code snippet
const example = () => {
  console.log("Hello, World!");
  return true;
};`}
                </pre>
              </div>

              <h2>Conclusion</h2>
              <p>
                We've covered the essentials of {blog.title.toLowerCase()}. With practice and
                dedication, you'll master these concepts in no time. Keep learning and building!
              </p>
            </div>

            <div className="blog-footer-detail">
              <div className="tags">
                <span className="tag">{blog.category}</span>
                <span className="tag">Tutorial</span>
                <span className="tag">Guide</span>
              </div>
              <div className="share">
                <h4>Share this article:</h4>
                <div className="share-buttons">
                  <button className="share-btn">Twitter</button>
                  <button className="share-btn">LinkedIn</button>
                  <button className="share-btn">Facebook</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
