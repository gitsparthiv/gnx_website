import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Success = () => {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '100px' }}>
      <Helmet>
        <title>Registration Successful | GNX</title>
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
        
        <h1 className="form-title" style={{ fontSize: '2.5rem' }}>Registration Successful!</h1>
        <p className="form-subtitle" style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
          Welcome to the GNX community. You've officially taken the first step toward innovation.
        </p>
        
        <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', marginBottom: '30px', textAlign: 'left' }}>
          <p style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '10px' }}>What's next?</p>
          <ul style={{ color: 'var(--text-dim)', marginLeft: '20px' }}>
            <li>Check your email for the event details.</li>
            <li>Join our Discord server to meet other members.</li>
            <li>Follow our Instagram for live updates.</li>
          </ul>
        </div>
        
        <Link to="/" className="btn-submit" style={{ textDecoration: 'none' }}>
          Back to Home <i className='bx bx-home'></i>
        </Link>
      </motion.div>
    </main>
  );
};

export default Success;
