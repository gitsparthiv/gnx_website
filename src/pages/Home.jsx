import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Countdown from '../components/Countdown';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main>
      <Helmet>
        <title>GNX | Innovative Tech Club</title>
        <meta name="description" content="GNX is the premier college tech club for innovators and builders." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero" id="home">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="logo-container"
        >
          <img src="/assets/logo.png" alt="GNX Logo" className="main-logo-img" />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="tagline"
        >
          "Built by students Powered by curiosity Driven by code"
        </motion.p>

        {/* Live Countdown */}
        <motion.div {...fadeInUp} style={{ marginTop: '20px' }}>
          <p style={{ color: 'var(--primary)', fontWeight: 'bold' }}>NEXT HACKATHON IN:</p>
          <Countdown targetDate="2026-05-15T00:00:00" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="hero-btns" 
          style={{ marginTop: '40px', display: 'flex', gap: '20px' }}
        >
          <Link to="/register" className="btn-register">Register for Upcoming Event</Link>
          <a href="#gallery" className="btn-live" style={{ background: 'transparent', border: '1px solid var(--primary)' }}>Explore</a>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="highlights-section">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="highlights-grid"
        >
          <motion.div variants={fadeInUp} className="highlight-card glass">
            <i className='bx bxs-group'></i>
            <h3>Collaborative</h3>
            <p>Peer-to-peer mentorship and team-based projects.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="highlight-card glass">
            <i className='bx bxs-bolt'></i>
            <h3>Fast-paced</h3>
            <p>Staying at the forefront with weekly workshops.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="highlight-card glass">
            <i className='bx bxs-award'></i>
            <h3>Excellence</h3>
            <p>Winning hackathons and creating impact.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="events-section">
        <motion.div {...fadeInUp} className="card-horizontal glass">
          <div className="card-badge">UPCOMING EVENT</div>
          <div className="card-content">
            <div className="card-left">
              <Link to="/register" className="btn-register">
                <i className='bx bxs-calendar-plus'></i>
                REGISTER NOW
              </Link>
              <div className="dots">...</div>
            </div>
            <div className="card-right">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" alt="Event" className="card-img" />
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="card-horizontal glass">
          <div className="card-badge">UPCOMING EVENT</div>
          <div className="card-content">
            <div className="card-left">
              <a href="#gallery" className="btn-gallery">
                <i className='bx bxs-collection'></i>
                VIEW GALLERY
              </a>
              <div className="dots">...</div>
            </div>
            <div className="card-right">
              <img src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=400" alt="Gallery" className="card-img" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <motion.h2 {...fadeInUp} className="section-title">Club Memories</motion.h2>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="gallery-grid"
        >
          <motion.div variants={fadeInUp} className="gallery-item glass">
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600" alt="Work" />
            <div className="gallery-overlay">
              <h4>Code Fest 2025</h4>
              <p>Workshop Series</p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="gallery-item glass">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600" alt="Work" />
            <div className="gallery-overlay">
              <h4>Team Building</h4>
              <p>Indoor Fun</p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="gallery-item glass">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600" alt="Work" />
            <div className="gallery-overlay">
              <h4>Annual Hack</h4>
              <p>Global Competition</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <motion.h2 {...fadeInUp} className="section-title">About Us</motion.h2>
        <motion.div {...fadeInUp} className="card-horizontal-about glass">
          <div className="about-icon">
            <img src="/assets/logo.png" alt="Logo mini" />
          </div>
          <div className="about-text">
            <h3>Who are we?</h3>
            <p style={{ color: 'var(--text-dim)', marginTop: '10px' }}>GNX is a community of passionate developers and innovators.</p>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="card-horizontal-about glass">
          <div className="about-text">
            <h3>What we do?</h3>
            <p style={{ color: 'var(--text-dim)', marginTop: '10px' }}>We organize workshops, hackathons, and collaborative projects.</p>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=300" alt="Team activity" />
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <motion.h2 {...fadeInUp} className="section-title">Core Team</motion.h2>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="team-grid"
        >
          <motion.div variants={fadeInUp} className="team-card glass">
            <div className="team-img-wrapper">
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300" alt="Lead" />
            </div>
            <h3>Arnav Singh</h3>
            <p>Founder / Lead</p>
            <div className="team-socials">
              <a href="#"><i className='bx bxl-linkedin'></i></a>
              <a href="#"><i className='bx bxl-github'></i></a>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="team-card glass">
            <div className="team-img-wrapper">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300" alt="Tech" />
            </div>
            <h3>Riya Das</h3>
            <p>Technical Architect</p>
            <div className="team-socials">
              <a href="#"><i className='bx bxl-linkedin'></i></a>
              <a href="#"><i className='bx bxl-github'></i></a>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="team-card glass">
            <div className="team-img-wrapper">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" alt="Design" />
            </div>
            <h3>Devansh Jha</h3>
            <p>UX/UI Specialist</p>
            <div className="team-socials">
              <a href="#"><i className='bx bxl-linkedin'></i></a>
              <a href="#"><i className='bx bxl-github'></i></a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="feedback-section">
        <motion.h2 {...fadeInUp} className="section-title-feedback">WE VALUE YOUR FEEDBACK !!</motion.h2>
        <motion.p {...fadeInUp} className="feedback-sub">Let us know how we can improve your experience at GNX</motion.p>

        <motion.form {...fadeInUp} className="feedback-form" onSubmit={(e) => { e.preventDefault(); alert('Feedback sent!'); }}>
          <div className="input-group">
            <i className='bx bx-user'></i>
            <input type="text" placeholder="Your name" required />
          </div>
          <div className="input-group">
            <i className='bx bx-envelope'></i>
            <input type="email" placeholder="Your email" required />
          </div>
          <div className="input-group textarea">
            <textarea placeholder="Your message..." required></textarea>
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="btn-submit">
            SEND MESSAGE <i className='bx bx-send'></i>
          </motion.button>
        </motion.form>
      </section>
    </main>
  );
};

export default Home;

