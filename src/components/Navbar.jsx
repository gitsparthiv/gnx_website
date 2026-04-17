import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
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

        <div id="menu-toggle" onClick={() => setMenuActive(!menuActive)}>
          <i className={`bx ${menuActive ? 'bx-x' : 'bx-menu'}`}></i>
        </div>

        
        <div className={`nav-links ${menuActive ? 'active' : ''}`}>
          <Link to="/">HOME</Link>
          <a href="/#about">ABOUT US</a>
          <a href="/#events">EVENTS</a>
          <a href="/#gallery">GALLERY</a>
          <a href="/#team">OUR TEAM</a>
          <a href="/#feedback">FEEDBACK</a>
        </div>

        {location.pathname !== '/register' && (
          <Link to="/register" className="btn-live">Register Now</Link>
        )}
        {location.pathname === '/register' && (
          <Link to="/" className="btn-live">Back to Home</Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
