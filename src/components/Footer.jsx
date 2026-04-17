import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-grid">
        <div className="footer-left">
          <img src="/assets/logo.png" alt="GNX Logo" className="footer-logo-img" />
          <p>NEXT GENERATION INNOVATORS</p>
        </div>
        <div className="footer-center">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="/register">Registration</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>CONNECT WITH US</h4>
          <p>Join our community of builders and creators.</p>
          <div className="social-icons">
            <a href="#"><i className='bx bxl-instagram'></i></a>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
            <a href="#"><i className='bx bxl-github'></i></a>
            <a href="#"><i className='bx bxl-discord-alt'></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bar" style={{marginTop: '50px', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem'}}>
        <p>&copy; 2026 GNX Tech Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
