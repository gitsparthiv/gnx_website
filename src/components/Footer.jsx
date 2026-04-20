import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" style={{ fontWeight: '800', textDecoration: 'none' }}>GNX<span style={{ color: 'var(--primary)' }}>_</span></Link>
          <p className="footer-tagline">
            The official GNU/Linux group at NSEC, Kolkata. We build stuff, break stuff, learn from it, and do it all over again.
          </p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/gnx_nsec/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className='bx bxl-instagram'></i></a>
            <a href="https://www.linkedin.com/company/gnx-nsec/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className='bx bxl-linkedin'></i></a>
            <a href="https://github.com/gitsparthiv/gnx_website" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className='bx bxl-github'></i></a>
          </div>
        </div>

        <div className="footer-links-group">
          <div className="footer-column">
            <h4>NAVIGATE</h4>
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/register">Register</Link>
          </div>
          
          <div className="footer-column">
            <h4>DOMAINS</h4>
            <span style={{ color: 'var(--text-dim)', fontSize: '14px', display: 'block', marginBottom: '1rem' }}>GNU/Linux</span>
            <span style={{ color: 'var(--text-dim)', fontSize: '14px', display: 'block', marginBottom: '1rem' }}>Web Architecture</span>
            <span style={{ color: 'var(--text-dim)', fontSize: '14px', display: 'block', marginBottom: '1rem' }}>AI/ML & Data Science</span>
            <span style={{ color: 'var(--text-dim)', fontSize: '14px', display: 'block', marginBottom: '1rem' }}>Cybersecurity</span>
          </div>

          <div className="footer-column">
            <h4>CONNECT</h4>
            <div className="id-item">
              <span className="id-label">LOCATION</span>
              <span className="id-value">NSEC Campus, Kolkata</span>
            </div>
            <div className="id-item">
              <span className="id-label">EMAIL</span>
              <a href="mailto:gnx.cse@nsec.ac.in" className="id-value" style={{ display: 'block', transition: '0.3s' }}>gnx.cse@nsec.ac.in</a>
            </div>
            <div className="id-item">
              <span className="id-label">STATUS</span>
              <span className="id-value status-online">Operational</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom" style={{ justifyContent: 'center', textAlign: 'center' }}>
        <div className="footer-copyright" style={{ width: '100%' }}>
          &copy; {new Date().getFullYear()} GNX Tech Club, NSEC Kolkata. Built with <span style={{ color: 'var(--primary)' }}>&hearts;</span> by the GNX Tech Team.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
