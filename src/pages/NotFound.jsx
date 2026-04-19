import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      <Helmet>
        <title>404 — Page Not Found | GNX</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div style={{
          fontSize: 'clamp(80px, 15vw, 160px)',
          fontWeight: '900',
          fontFamily: "'Outfit', sans-serif",
          background: 'linear-gradient(135deg, var(--primary), rgba(230,62,0,0.3))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1,
          marginBottom: '20px'
        }}>
          404
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '15px', letterSpacing: '3px' }}>
          WRONG TURN
        </h2>

        <p style={{ color: 'var(--text-dim)', maxWidth: '400px', margin: '0 auto 40px', lineHeight: 1.7 }}>
          This page doesn't exist — maybe it was moved, or maybe you just typed something funky. Either way, let's get you back.
        </p>

        <Link to="/" style={{
          background: 'var(--primary)',
          color: '#fff',
          padding: '14px 35px',
          borderRadius: '12px',
          fontWeight: '700',
          fontSize: '0.9rem',
          letterSpacing: '1px',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 4px 20px var(--primary-glow)',
          transition: '0.3s'
        }}>
          <i className='bx bx-home'></i> Return to Base
        </Link>
      </motion.div>
    </main>
  );
};

export default NotFound;
