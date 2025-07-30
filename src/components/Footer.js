import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright-text">© {currentYear} MEGAN INSPIRED × ARCHITECTURE OS</div>
      </div>
    </footer>
  );
};

export default Footer;
