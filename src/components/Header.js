import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isMenuOpen, toggleMenu }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Update time every second for the terminal-like header
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Style for making the menu button clearly visible
  const menuButtonStyle = {
    background: 'none',
    border: 'none',
    color: 'black', // Ensure black color for the menu button
    fontSize: '24px',
    cursor: 'pointer',
    padding: '5px 10px',
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    opacity: 1,
    display: 'block'
  };

  return (
    <>
      <div className="terminal-status-bar">
        <div className="status-item">MEGAN OS</div>
        <div className="status-item">{currentTime}</div>
        <div className="status-item">SYSTEM: ONLINE</div>
      </div>

      <header className="header">
        <div className="logo">
          <Link to="/" className="logo-link">MEGAN GAO<span className="terminal-cursor">_</span></Link>
        </div>
        <button 
          style={menuButtonStyle}
          onClick={toggleMenu}
          className="menu-button"
        >
          {isMenuOpen ? 'X' : '≡'}
        </button>
      </header>

      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="menu-item terminal-style" onClick={isMenuOpen ? toggleMenu : undefined}>$ cd /HOME</Link>
        <Link to="/feed" className="menu-item terminal-style" onClick={isMenuOpen ? toggleMenu : undefined}>$ open FEED.app</Link>
        <Link to="/about" className="menu-item terminal-style" onClick={isMenuOpen ? toggleMenu : undefined}>$ man ABOUT</Link>
      </div>
    </>
  );
};

export default Header;
