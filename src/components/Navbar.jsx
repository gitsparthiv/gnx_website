import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuActive(false);
  }, [location]);

  return (
    <header>
      <nav className={`nav-container glass ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="navbar-logo">
          <img src="/assets/logo.png" alt="GNX" style={{ height: '40px' }} />
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div className="theme-toggle" onClick={toggleTheme} style={{ cursor: 'pointer', fontSize: '1.5rem', color: 'var(--primary)' }}>
            <i className={`bx ${theme === 'dark' ? 'bx-sun' : 'bx-moon'}`}></i>
          </div>

          <div id="menu-toggle" onClick={() => setMenuActive(!menuActive)}>
            <i className={`bx ${menuActive ? 'bx-x' : 'bx-menu'}`}></i>
          </div>
        </div>

        <div className={`nav-links ${menuActive ? 'active' : ''}`}>
          <Link to="/">HOME</Link>
          <a href="/#about">ABOUT US</a>
          <a href="/#events">EVENTS</a>
          <a href="/#gallery">GALLERY</a>
          <a href="/#team">OUR TEAM</a>
          <a href="/#feedback">FEEDBACK</a>
        </div>

        {location.pathname !== '/register' && location.pathname !== '/success' && (
          <Link to="/register" className="btn-live">Register Now</Link>
        )}
        {(location.pathname === '/register' || location.pathname === '/success') && (
          <Link to="/" className="btn-live">Back to Home</Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
