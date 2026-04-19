import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Countdown from '../components/Countdown';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [feedback, setFeedback] = useState({ name: '', email: '', message: '' });
  const [feedbackSent, setFeedbackSent] = useState(false);

  const stats = [
    { label: 'Active Members', value: '500', suffix: '+' },
    { label: 'Events Hosted', value: '6', suffix: '+' },
    { label: 'Years & Counting', value: '2', suffix: '' },
  ];

  const highlights = [
    {
      icon: 'bx-code-curly',
      title: 'Open Source at Heart',
      description: 'We don\'t just talk about open source — we live it. From contributing to real projects to building our own tools, everything we do starts with code that\'s free to share.'
    },
    {
      icon: 'bx-brain',
      title: 'Hands-On, Always',
      description: 'Forget boring lectures. Our workshops on AI, web dev, Linux, and cybersecurity are designed so you leave every session having actually built something.'
    },
    {
      icon: 'bx-trophy',
      title: 'Build & Compete',
      description: 'Hackathons, CTFs, and coding battles — we give you the stage to test your skills against the best, win prizes, and add real achievements to your resume.'
    },
    {
      icon: 'bx-group',
      title: 'Your Second Family',
      description: 'GNX isn\'t just a club — it\'s 500+ students who help each other debug code at 2 AM, share internship leads, and celebrate every small win together.'
    }
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
    setFeedbackSent(true);
    setTimeout(() => setFeedbackSent(false), 3000);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <div className="home-page">
      <Helmet>
        <title>GNX | Official GNU/Linux Tech Club — NSEC Kolkata</title>
        <meta name="description" content="GNX is the official GNU/Linux tech club at Netaji Subhash Engineering College, Kolkata. Join workshops, hackathons, and open-source projects." />
      </Helmet>

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

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="hero-description"
        >
          Where <span>curious minds</span> come together to build, break, and learn — one open-source project at a time.
        </motion.p>

        <Countdown targetDate="2026-05-16T00:00:00" />

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="hero-cta-group"
        >
          <Link to="/register" className="btn-primary">
            <i className='bx bx-rocket' style={{ marginRight: '8px' }}></i>
            Join Our Next Event
          </Link>
          <Link to="/events" className="btn-outline">
            <i className='bx bx-calendar' style={{ marginRight: '8px' }}></i>
            See What's Coming
          </Link>
        </motion.div>

        <div className="stats-container">
          {stats.map((s, i) => (
            <motion.div 
              key={s.label} 
              className="stat-box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="stat-value">{s.prefix}{s.value}{s.suffix}</div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <motion.section 
        className="about-section" 
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <h2 className="section-title">WHO WE ARE</h2>
        <div className="card-horizontal-about glass">
          <div className="about-text">
            <p>
              We're <strong>GNX</strong> — the official GNU/Linux group at Netaji Subhash Engineering College, Kolkata. 
              Started by a bunch of students who believed that the best way to learn tech is to get your hands dirty with it. 
              No gatekeeping, no prerequisites — just show up with curiosity and a laptop.
            </p>
            <p style={{marginTop: '20px'}}>
              From Linux install parties and hackathon all-nighters to open-source contribution sprints and career-focused tech talks, 
              we create spaces where students can explore what excites them, find their people, and build things that matter. 
              Whether you're writing your first "Hello World" or shipping production code, 
              <span> there's a place for you here.</span>
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── WHY JOIN SECTION ── */}
      <motion.section 
        className="highlights-section" 
        id="why-gnx"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <h2 className="section-title">WHY JOIN GNX?</h2>
        <div className="highlights-grid">
          {highlights.map((item, i) => (
            <motion.div 
              key={item.title}
              className="highlight-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8, borderColor: 'rgba(230, 62, 0, 0.3)' }}
            >
              <div className="highlight-icon">
                <i className={`bx ${item.icon}`}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── FEATURED EVENTS (on Home) ── */}
      <motion.section 
        className="events-section" 
        id="events"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <h2 className="section-title">COMING UP NEXT</h2>
        <div className="home-events-grid">
          <div className="card-horizontal glass">
            <div className="card-content">
              <div className="card-left">
                <span className="card-badge">FLAGSHIP EVENT</span>
                <h3 style={{fontSize: '1.8rem'}}>GNX Hackathon 2026</h3>
                <p style={{color: 'var(--text-dim)'}}>48 hours. Your team. One challenge. Build something that doesn't exist yet — and compete for prizes, bragging rights, and mentorship from industry pros.</p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                  <i className='bx bx-calendar' style={{ color: 'var(--primary)' }}></i> May 15-17, 2026
                  <span style={{ opacity: 0.3 }}>|</span>
                  <i className='bx bx-map-pin' style={{ color: 'var(--primary)' }}></i> Main Auditorium, NSEC
                </div>
                <Link to="/register" className="btn-primary" style={{alignSelf: 'flex-start', marginTop: '10px'}}>Grab Your Spot</Link>
              </div>
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400" alt="GNX Hackathon 2026" className="card-img" />
            </div>
          </div>

          <div className="card-horizontal glass">
            <div className="card-content">
              <div className="card-left">
                <span className="card-badge">WORKSHOP</span>
                <h3 style={{fontSize: '1.8rem'}}>Foundations of AI/ML</h3>
                <p style={{color: 'var(--text-dim)'}}>No prior experience needed. We'll walk you through neural networks, model training, and the tools that power modern AI — step by step, with real code.</p>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                  <i className='bx bx-calendar' style={{ color: 'var(--primary)' }}></i> May 22, 2026
                  <span style={{ opacity: 0.3 }}>|</span>
                  <i className='bx bx-map-pin' style={{ color: 'var(--primary)' }}></i> Lab 4, CSE Dept
                </div>
                <Link to="/events" className="btn-outline" style={{alignSelf: 'flex-start', marginTop: '10px'}}>See All Events</Link>
              </div>
              <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=400" alt="AI/ML Workshop" className="card-img" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── FEEDBACK SECTION ── */}
      <motion.section 
        className="feedback-section" 
        id="feedback"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <h2 className="section-title">SAY HELLO</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-dim)', maxWidth: '480px', margin: '-40px auto 40px', lineHeight: 1.7 }}>
          Got a question, an idea for a collab, or just want to chat? Drop us a message — we read every single one.
        </p>
        <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
          <div className="input-group">
            <i className='bx bx-user' style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)', fontSize: '1.1rem', pointerEvents: 'none' }}></i>
            <input 
              type="text" 
              placeholder="What's your name?" 
              required 
              value={feedback.name}
              onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
              style={{ paddingLeft: '50px' }}
            />
          </div>
          <div className="input-group">
            <i className='bx bx-envelope' style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)', fontSize: '1.1rem', pointerEvents: 'none' }}></i>
            <input 
              type="email" 
              placeholder="Your email address" 
              required 
              value={feedback.email}
              onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
              style={{ paddingLeft: '50px' }}
            />
          </div>
          <div className="input-group">
            <i className='bx bx-message-detail' style={{ position: 'absolute', left: '20px', top: '22px', color: 'var(--primary)', fontSize: '1.1rem', pointerEvents: 'none' }}></i>
            <textarea 
              placeholder="What's on your mind?" 
              required 
              value={feedback.message}
              onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
              style={{ paddingLeft: '50px' }}
            ></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            {feedbackSent ? (
              <><i className='bx bx-check'></i> Sent! We'll get back to you.</>
            ) : (
              <><i className='bx bx-send'></i> Send Message</>
            )}
          </button>
        </form>
      </motion.section>

      <style>{`
        .hero-cta-group {
          display: flex;
          gap: 15px;
          margin-top: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .hero-cta-group .btn-primary,
        .hero-cta-group .btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .highlights-section {
          padding: var(--section-padding);
          max-width: 1200px;
          margin: 0 auto;
        }
        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 25px;
        }
        .highlight-card {
          border-radius: 20px;
          padding: 35px 30px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: default;
        }
        .highlight-icon {
          width: 55px;
          height: 55px;
          border-radius: 14px;
          background: rgba(230, 62, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .highlight-icon i {
          font-size: 1.8rem;
          color: var(--primary);
        }
        .highlight-card h3 {
          font-size: 1.15rem;
          margin-bottom: 10px;
          font-weight: 700;
        }
        .highlight-card p {
          color: var(--text-dim);
          font-size: 0.9rem;
          line-height: 1.7;
        }
        .home-events-grid {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .feedback-form .input-group {
          position: relative;
        }
        @media (max-width: 768px) {
          .hero-cta-group { flex-direction: column; align-items: center; }
          .hero-cta-group .btn-primary,
          .hero-cta-group .btn-outline { width: 100%; max-width: 280px; text-align: center; }
          .card-content { flex-direction: column; padding: 30px; }
          .card-img { width: 100%; height: 200px; }
          .highlights-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Home;
