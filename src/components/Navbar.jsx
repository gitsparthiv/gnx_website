import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuActive(false); }, [location]);

  const isRegisterOrSuccess =
    location.pathname === '/register' || location.pathname === '/success';

  return (
    <header>
      <nav className={`nav-container glass ${scrolled ? 'scrolled' : ''}`}>

        <Link to="/" className="navbar-logo">
          <div className="nav-logo-text" style={{ fontSize: '1.5rem', fontWeight: '800' }}>
            GNX<span style={{ color: 'var(--primary)' }}>_</span>
          </div>
        </Link>

        {/* ── Centre: Nav links (desktop) ── */}
        <div className={`nav-links ${menuActive ? 'active' : ''}`}>
          <a href="/">HOME</a>
          <a href="/#about">ABOUT US</a>
          <a href="/#events">EVENTS</a>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/team">OUR TEAM</Link>
          <a href="/#feedback">FEEDBACK</a>
        </div>

        {/* ── Right: Theme toggle + CTA + hamburger ── */}
        <div className="nav-right">
          {!isRegisterOrSuccess && (
            <Link to="/register" className="btn-live">Register Now</Link>
          )}
          {isRegisterOrSuccess && (
            <a href="/" className="btn-live">Back to Home</a>
          )}

          <button
            id="menu-toggle"
            className="hamburger"
            onClick={() => setMenuActive(m => !m)}
            aria-label="Toggle menu"
          >
            <i className={`bx ${menuActive ? 'bx-x' : 'bx-menu'}`} />
          </button>
        </div>
      </nav>
    </header>
  );
};


export default Navbar;
