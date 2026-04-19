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

  // Close mobile menu on route change
  useEffect(() => { setMenuActive(false); }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuActive ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuActive]);

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

        {/* ── Centre: Nav links (desktop + mobile drawer) ── */}
        <div className={`nav-links ${menuActive ? 'active' : ''}`}>
          <Link to="/">HOME</Link>
          <Link to="/events">EVENTS</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/team">OUR TEAM</Link>
          <a href="/#about">ABOUT</a>
          <a href="/#feedback">CONTACT</a>
        </div>

        {/* ── Right: CTA + hamburger ── */}
        <div className="nav-right">
          {!isRegisterOrSuccess && (
            <Link to="/register" className="btn-live">Register Now</Link>
          )}
          {isRegisterOrSuccess && (
            <Link to="/" className="btn-live">Back to Home</Link>
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

      {/* Mobile overlay backdrop */}
      {menuActive && (
        <div 
          className="nav-overlay" 
          onClick={() => setMenuActive(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 999,
            backdropFilter: 'blur(4px)'
          }}
        />
      )}
    </header>
  );
};

export default Navbar;
