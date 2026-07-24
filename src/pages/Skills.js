import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 95 },
        { name: 'TailwindCSS', level: 85 }
      ]
    },
    {
      category: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express', level: 85 },
        { name: 'PHP', level: 70 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      category: 'Design & Tools',
      icon: '🛠️',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Git', level: 90 },
        { name: 'Responsive Design', level: 85 },
        { name: 'UI/UX', level: 80 }
      ]
    }
  ];

  return (
    <div className="skills">
      <section className="section">
        <div className="container">
          <h1 className="section-title fade-in">My Skills</h1>
          <p className="section-subtitle fade-in">Technologies I work with</p>

          <div className="skills-categories">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category card fade-in">
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h2>{category.category}</h2>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="additional-skills">
            <h2 className="section-title">Other Skills</h2>
            <div className="tags-container">
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">Database Design</span>
              <span className="skill-tag">Version Control</span>
              <span className="skill-tag">Agile Development</span>
              <span className="skill-tag">Problem Solving</span>
              <span className="skill-tag">Team Collaboration</span>
              <span className="skill-tag">Web Performance</span>
              <span className="skill-tag">Projects Analysis</span>
              <span className="skill-tag">Testing & Debugging</span>
              <span className="skill-tag">Code Review</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
