import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Countdown from '../components/Countdown';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [feedback, setFeedback] = useState({ name: '', email: '', message: '' });

  const stats = [
    { label: 'Members', value: '500', suffix: '+' },
    { label: 'Events hosted', value: '6', suffix: '+' },
    { label: 'Years running', value: '2', suffix: '' },
    // { label: 'Prize pool', value: '2', prefix: '₹', suffix: 'L+' },
  ];

  // ── RANDOM GLITCH CONTROLLER ──
  useEffect(() => {
    let timeoutId;
    
    const triggerGlitch = () => {
      setIsGlitching(true);
      const burstDuration = 150 + Math.random() * 300;
      
      setTimeout(() => {
        setIsGlitching(false);
        const nextPause = 3000 + Math.random() * 5000;
        timeoutId = setTimeout(triggerGlitch, nextPause);
      }, burstDuration);
    };

    timeoutId = setTimeout(triggerGlitch, 2500);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Feedback from ${feedback.name}`);
    const body = encodeURIComponent(
      `Name: ${feedback.name}\nEmail: ${feedback.email}\n\nMessage:\n${feedback.message}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=gnx.cse@nsec.ac.in&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="home-page">
      {/* ── HERO SECTION ── */}
      <section className="hero" id="home">
        <div className={`glitch-wrapper ${isGlitching ? 'is-glitching' : ''}`}>
          <div className="glitch-red">GNX</div>
          <div className="glitch-cyan">GNX</div>
          <div className="glitch-yellow">GNX</div>
          <div className="glitch-bar"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="gnx-glitch-text"
            data-text="GNX"
          >
            GNX
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="identity-bar"
        >
          <div className="id-pill">GNU / Linux Group</div>
          <div className="id-dot"></div>
          <div className="id-location">Netaji Subhash Engineering College</div>
        </motion.div>

        <motion.p className="hero-description">
          A community of <span>open source minds</span> — building, breaking, and learning together.
        </motion.p>

        <Countdown targetDate="2026-05-16T00:00:00" />

        <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
          <Link to="/register" className="btn-primary">
            Register for event
          </Link>
          <Link to="/gallery" className="btn-outline">
            View our memories
          </Link>
        </div>

        <div className="stats-container">
          {stats.map((s, i) => (
            <div key={s.label} className="stat-box">
              <div className="stat-value">{s.prefix}{s.value}{s.suffix}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section className="about-section" id="about">
        <h2 className="section-title">ABOUT US</h2>
        <div className="card-horizontal-about glass">
          <div className="about-text">
            <p>
              GNX is the official <strong>GNU/Linux group of Netaji Subhash Engineering College</strong> — a student-driven community united by a passion for open-source technology and collaborative learning. 
              We believe in the power of free and open-source software to democratize knowledge, and we strive to bring that spirit to every corner of our campus.
            </p>
            <p style={{marginTop: '20px'}}>
              From hands-on Linux workshops and hackathons to open-source contribution drives and tech talks, GNX is where curious minds come together to explore, build, and share. 
              Whether you are just starting your journey into the world of open source or are already a seasoned contributor, GNX welcomes you to be part of a movement that values 
              <span>freedom, transparency, and community</span> above all else.
            </p>
          </div>
        </div>
      </section>

      {/* ── EVENTS SECTION ── */}
      <section className="events-section" id="events">
        <h2 className="section-title">UPCOMING EVENTS</h2>
        {[1, 2].map(i => (
          <div key={i} className="card-horizontal glass">
            <div className="card-content">
              <div className="card-left">
                <span className="card-badge">FLAGSHIP EVENT</span>
                <h3 style={{fontSize: '1.8rem'}}>GNX Hackathon 2026</h3>
                <p style={{color: 'var(--text-dim)'}}>Join us for 48 hours of intense building, mentorship, and big prizes.</p>
                <button className="btn-primary" style={{alignSelf: 'flex-start'}}>Explore More</button>
              </div>
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400" alt="Event" className="card-img" />
            </div>
          </div>
        ))}
      </section>

      {/* ── FEEDBACK SECTION ── */}
      <section className="feedback-section" id="feedback">
        <h2 className="section-title">FEEDBACK</h2>
        <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              value={feedback.name}
              onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
            />
          </div>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Your Gmail" 
              required 
              value={feedback.email}
              onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
            />
          </div>
          <div className="input-group">
            <textarea 
              placeholder="Your Message" 
              required 
              value={feedback.message}
              onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
            ></textarea>
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
