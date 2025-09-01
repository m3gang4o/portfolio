import React, { useState, useEffect, useRef } from 'react';
import './AboutPage.css';

const AboutPage = ({ isMenuOpen }) => {
  const [pixelPosition, setPixelPosition] = useState({ x: 1060, y: 130 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const pixelRef = useRef(null);

  // Handle keyboard movement
  useEffect(() => {
    const handleKeyPress = (e) => {
      const step = 10; 
      
      switch(e.key) {
        case 'ArrowUp':
          e.preventDefault();
          setPixelPosition(prev => ({ ...prev, y: Math.max(0, prev.y - step) }));
          break;
        case 'ArrowDown':
          e.preventDefault();
          setPixelPosition(prev => ({ ...prev, y: Math.min(window.innerHeight - 100, prev.y + step) }));
          break;
        case 'ArrowLeft':
          e.preventDefault();
          setPixelPosition(prev => ({ ...prev, x: Math.max(0, prev.x - step) }));
          break;
        case 'ArrowRight':
          e.preventDefault();
          setPixelPosition(prev => ({ ...prev, x: Math.min(window.innerWidth - 100, prev.x + step) }));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Handle mouse drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = pixelRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPixelPosition({
        x: Math.max(0, Math.min(window.innerWidth - 100, e.clientX - dragOffset.x)),
        y: Math.max(0, Math.min(window.innerHeight - 100, e.clientY - dragOffset.y))
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  return (
    <div className="about-page-container">
      <main className="about-content">
      <section className="about-hero">
          <div className="hero-content">
            <div className="hero-image">
              <img src="/media/cargos.png" alt="Megan Gao" className="profile-head" />
            </div>
            <div className="hero-text">
              <h1 className="about-title">"ABOUT"</h1> 
            </div>
          </div>
        </section>

        <section className="about-section philosophy-section">
          {isDesktop && !isMenuOpen && (
            <img 
              src="/media/pixel.png" 
              alt="Pixel Character" 
              className="pixel-character"
              ref={pixelRef}
              style={{
                position: 'absolute',
                left: pixelPosition.x,
                top: pixelPosition.y,
                cursor: isDragging ? 'grabbing' : 'grab',
                zIndex: 1000,
                width: '250px',
                height: 'auto',
                userSelect: 'none'
              }}
              onMouseDown={handleMouseDown}
              draggable={false}
            />
          )}
          <h2 className="about-section-title">MY STORY</h2>
          <p>
          Hi! I'm Megan Gao, a designer, developer, and problem-solver passionate about building thoughtful, impactful technology. My journey started with a love for visual storytelling and a fascination with how digital products work. That interest evolved into a deeper commitment to creating user-first experiences that are functional, beautiful, and data-informed.
          </p>
          <p>
          At UNC-Chapel Hill, I'm studying Computer Science and Data Science, where I've gained hands-on experience across software engineering, product design, and analytics. I'm especially drawn to roles that combine technical execution with creativity and strategy. I'm currently exploring product management as a path where I can connect ideas, users, and teams. I also have a growing interest in how tools like AI can enhance product experiences when designed thoughtfully and ethically.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">WHAT I DO</h2>
          <div className="skills-showcase">
            <div className="skill-area">
              <h3>00. SOFTWARE AND FRONT-END DEVELOPMENT</h3>
              <p>I build responsive and intuitive digital experiences using React, JavaScript, HTML, CSS, and Node.js. I focus on clean code, accessibility, and performance to ensure a smooth user experience across devices.</p>
            </div>
            <div className="skill-area">
              <h3>01. UI/UX AND PRODUCT DESIGN</h3>
              <p>I design user interfaces that are not only visually engaging but also grounded in research and usability. I use Figma, Framer, and Adobe Creative Suite to create prototypes, wireframes, and scalable design systems.</p>
            </div>
            <div className="skill-area">
              <h3>02. DATA ANALYTICS AND STRATEGY</h3>
              <p>I enjoy working with data to uncover insights and guide product decisions. With experience in Python, SQL, Tableau, and Excel, I analyze trends, track user behavior, and visualize outcomes to support growth and retention strategies.</p>
            </div>
            <div className="skill-area">
              <h3>03. CROSS-FUNCTIONAL PRODUCT THINKING</h3>
              <p>I work across disciplines to bring ideas to life, from user research and feature planning to testing and iteration. I thrive in collaborative environments where design, engineering, and strategy come together to build meaningful products. I'm excited by emerging technologies, including AI, and how they can be integrated in a way that enhances functionality and user experience.</p>
            </div>
          </div>
          <div className="full-body-container">
            <img src="/media/fullBody.png" alt="Megan Gao Full Portrait" className="full-body-image" />
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">COURSEWORK</h2>
          <p className="classes-intro">
            Core Computer Science and Data Science classes I have taken at UNC-Chapel Hill.
          </p>
          
          <div className="classes-container">
            <div className="class-category">
              <h3 className="category-title">Core Computer Science</h3>
              <div className="class-grid">
                <div className="class-row">
                  <span className="class-code">COMP 110</span>
                  <span className="class-name">Introduction to Programming</span>
                </div>
                <div className="class-row">
                  <span className="class-code">COMP 210</span>
                  <span className="class-name">Data Structures and Analysis</span>
                </div>
                <div className="class-row">
                  <span className="class-code">COMP 211</span>
                  <span className="class-name">Systems Fundamentals</span>
                </div>
                <div className="class-row">
                  <span className="class-code">COMP 301</span>
                  <span className="class-name">Foundations of Programming</span>
                </div>
                <div className="class-row">
                  <span className="class-code">COMP 311</span>
                  <span className="class-name">Computer Organization</span>
                </div>
                <div className="class-row">
                  <span className="class-code">COMP 426</span>
                  <span className="class-name">Modern Web Programming</span>
                </div>
                <div className="class-row">
                  <span className="class-code">COMP 455</span>
                  <span className="class-name">Models of Languages and Computation</span>
                </div>
                <div className="class-row">
                  <span className="class-code">COMP 550</span>
                  <span className="class-name">Algorithms and Analysis</span>
                </div>
              </div>
            </div>
            
            <div className="class-category">
              <h3 className="category-title">Mathematics & Statistics</h3>
              <div className="class-grid">
                <div className="class-row">
                  <span className="class-code">MATH 231</span>
                  <span className="class-name">Calculus of Functions of One Variable I</span>
                </div>
                <div className="class-row">
                  <span className="class-code">MATH 232</span>
                  <span className="class-name">Calculus of Functions of One Variable II</span>
                </div>
                <div className="class-row">
                  <span className="class-code">MATH 233</span>
                  <span className="class-name">Calculus of Functions of Several Variables</span>
                </div>
                <div className="class-row">
                  <span className="class-code">MATH 347</span>
                  <span className="class-name">Linear Algebra for Applications</span>
                </div>
                <div className="class-row">
                  <span className="class-code">MATH 381</span>
                  <span className="class-name">Discrete Mathematics</span>
                </div>
                <div className="class-row">
                  <span className="class-code">STOR 435</span>
                  <span className="class-name">Introduction to Probability</span>
                </div>
              </div>
            </div>

            <div className="class-category">
              <h3 className="category-title">Data Science</h3>
              <div className="class-grid">
                <div className="class-row">
                  <span className="class-code">DATA 110</span>
                  <span className="class-name">Introduction to Data Science</span>
                </div>
                <div className="class-row">
                  <span className="class-code">DATA 120</span>
                  <span className="class-name">Ethics of AI and Societal Decision Making</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section contact-prompt">
          <h2 className="about-section-title">LET'S CONNECT</h2>
          <p>
            I'm always excited to discuss new projects, innovative ideas, or opportunities to collaborate. Feel free to reach out via the contact section on my homepage, connect with me on <a href="https://www.linkedin.com/in/meganngao/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>LinkedIn</a>, or <a href="/media/MeganGao_CV.pdf" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>view my resume</a>.
          </p>
        </section>
      </main>

      {/* A simple footer if needed */}
      {/* 
      <footer className="about-footer">
        <p>&copy; {new Date().getFullYear()} Megan Gao. All rights reserved.</p>
      </footer> 
      */}
    </div>
  );
};

export default AboutPage;