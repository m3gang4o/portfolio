import React, { useState } from 'react';

const ImageTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'tab1',
      title: 'EXPERIENCE',
      type: 'text',
      experiences: [
        {
          role: 'Web Design Intern',
          company: 'SAS',
          period: 'May 2025 - August 2025',
          description: 'Developed and maintained features for Google Maps using React and TypeScript. Collaborated with UX designers to implement responsive interfaces.'
        },
        {
          role: 'Web Developer & Graphic Designer',
          company: '1893 Brand Studios',
          period: 'August 2024 - Present',
          description: 'Built interactive web applications with React, Redux, and CSS. Implemented responsive designs and optimized performance.'
        },
        {
          role: 'Media Chair',
          company: 'Carolina AR/VR',
          period: 'August 2024 - Present',
          description: 'Created websites for clients using HTML, CSS, and JavaScript. Worked with a team to deliver projects on tight deadlines.'
        }
      ],
      content: 'Professional experience in web development and data analytics.'
    },
    {
      id: 'tab2',
      title: 'SKILLS',
      type: 'skills',
      skillCategories: [
        {
          category: 'AI & Data Science',
          skills: ['Python', 'NumPy / Pandas', 'Scikit-learn', 'TensorFlow / PyTorch', 'Jupyter Notebooks', 'SQL']
        },
        {
          category: 'Web Development',
          skills: ['HTML / CSS', 'JavaScript', 'React', 'Node.js', 'Webflow', 'WordPress']
        },
        {
          category: 'Design & Visualization',
          skills: ['Figma', 'Adobe Creative Suite', 'Canva', 'Tableau', 'AfterEffects']
        },
        {
          category: 'Dev Tools & Workflow',
          skills: ['Git / GitHub', 'Docker', 'Microsoft Office', 'VS Code']
        }
      ],
      content: 'Technical skills and competencies in various programming languages and tools.'
    },
    {
      id: 'tab3',
      title: 'RESUME',
      type: 'image',
      image: 'https://via.placeholder.com/600x400/0000FF/FFFFFF?text=RESUME',
      content: 'Professional resume and qualifications.'
    },
  ];

  return (
    <section className="image-tabs-section">
      <div className="tabs-container">
        <div className="tabs-navigation">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        
        <div className="tab-content">
          {tabs[activeTab].type === 'image' ? (
            <div className="tab-image-container">
              <img 
                src={tabs[activeTab].image} 
                alt={tabs[activeTab].title} 
                className="tab-image"
              />
            </div>
          ) : tabs[activeTab].type === 'skills' ? (
            <div className="tab-skills-container">
              {tabs[activeTab].skillCategories.map((category, index) => (
                <div key={index} className="skill-category">
                  <h4 className="skill-category-title">{category.category}</h4>
                  <div className="skills-grid">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">{skill}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="tab-experience-container">
              {tabs[activeTab].experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h4 className="experience-role">{exp.role}</h4>
                    <div className="experience-company">{exp.company}</div>
                    <div className="experience-period">{exp.period}</div>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                </div>
              ))}
            </div>
          )}
          {tabs[activeTab].type === 'skills' ? (
            <div className="tab-text-content">
              <h3 className="tab-title">"{tabs[activeTab].title}"</h3>
              <p className="tab-description">{tabs[activeTab].content}</p>
            </div>
          ) : (
            <div className="tab-text-content">
              <h3 className="tab-title">"{tabs[activeTab].title}"</h3>
              <p className="tab-description">{tabs[activeTab].content}</p>
              <a href="#" className="tab-link">View More →</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageTabs;
