import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo" style={{ fontWeight: '800' }}>GNX<span style={{ color: 'var(--primary)' }}>_</span></div>
          <p className="footer-tagline">
            Pioneering the next generation of open-source innovation and systems engineering.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram"><i className='bx bxl-instagram'></i></a>
            <a href="#" aria-label="LinkedIn"><i className='bx bxl-linkedin'></i></a>
            <a href="#" aria-label="GitHub"><i className='bx bxl-github'></i></a>
            <a href="#" aria-label="Discord"><i className='bx bxl-discord-alt'></i></a>
          </div>
        </div>

        <div className="footer-links-group">
          <div className="footer-column">
            <h4>EXPLORE</h4>
            <a href="#home">Home Base</a>
            <a href="#about">Our Identity</a>
            <a href="#events">Launchpad</a>
            <a href="/register">Registration</a>
          </div>
          
          <div className="footer-column">
            <h4>TECHNICAL</h4>
            <a href="#">GNU/Linux</a>
            <a href="#">Web Architecture</a>
            <a href="#">Systems</a>
            <a href="#">Cybersec</a>
          </div>

          <div className="footer-column">
            <h4>IDENTIFY</h4>
            <div className="id-item">
              <span className="id-label">LOCATION</span>
              <span className="id-value">NSEC Campus, Kolkata</span>
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
          &copy; 2026 GNX TECH CLUB. DESIGNED FOR PERFORMANCE.
        </div>
        {/* <div className="footer-meta">
          V2.4.0-STABLE
        </div> */}
      </div>
    </footer>

  );
};

export default Footer;
