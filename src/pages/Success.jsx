import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Success = () => {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '100px' }}>
      <Helmet>
        <title>You're In! | GNX Tech Club</title>
      </Helmet>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="registration-container glass"
        style={{ maxWidth: '600px', textAlign: 'center' }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          style={{ fontSize: '80px', color: 'var(--primary)', marginBottom: '20px' }}
        >
          <i className='bx bxs-check-circle'></i>
        </motion.div>
        
        <h1 className="form-title" style={{ fontSize: '2.5rem' }}>You're all set!</h1>
        <p className="form-subtitle" style={{ fontSize: '1.1rem', marginBottom: '30px', lineHeight: 1.7 }}>
          Your registration is confirmed. Welcome to the GNX community — we're glad you're joining us.
        </p>
        
        <div style={{ padding: '24px', background: 'rgba(255,255,255,0.04)', borderRadius: '20px', marginBottom: '30px', textAlign: 'left' }}>
          <p style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '14px', fontSize: '0.95rem' }}>Here's what happens next:</p>
          <ul style={{ color: 'var(--text-dim)', marginLeft: '20px', lineHeight: 2.2 }}>
            <li>We'll send you an email with event details and any prep material.</li>
            <li>Follow us on <a href="https://www.instagram.com/gnx_nsec/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Instagram</a> so you don't miss last-minute updates.</li>
            <li>Show up on time, bring your laptop, and get ready to build something cool.</li>
          </ul>
        </div>
        
        <Link to="/" className="btn-submit" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <i className='bx bx-home'></i> Back to Home
        </Link>
      </motion.div>
    </main>
  );
};

export default Success;
