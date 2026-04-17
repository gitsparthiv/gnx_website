import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const revealOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, revealOptions);

    const items = document.querySelectorAll('.card-horizontal, .card-horizontal-about, .feedback-section, .section-title, .hero, .team-card, .gallery-item, .highlights-section');
    items.forEach(item => {
      item.classList.add('reveal-item');
      revealObserver.observe(item);
    });

    return () => revealObserver.disconnect();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="logo-container">
          <img src="/assets/logo.png" alt="GNX Logo" className="main-logo-img" />
        </div>
        <p className="tagline">"Built by students Powered by curiosity Driven by code"</p>
        <div className="hero-btns" style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
          <Link to="/register" className="btn-register">Register for Upcoming Event</Link>
          <a href="#gallery" className="btn-live" style={{ background: 'transparent', border: '1px solid var(--primary)' }}>Explore</a>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="highlights-section">
        <div className="highlights-grid">
          <div className="highlight-card glass">
            <i className='bx bxs-group'></i>
            <h3>Collaborative</h3>
            <p>Peer-to-peer mentorship and team-based projects.</p>
          </div>
          <div className="highlight-card glass">
            <i className='bx bxs-bolt'></i>
            <h3>Fast-paced</h3>
            <p>Staying at the forefront with weekly workshops.</p>
          </div>
          <div className="highlight-card glass">
            <i className='bx bxs-award'></i>
            <h3>Excellence</h3>
            <p>Winning hackathons and creating impact.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="events-section">
        <div className="card-horizontal glass">
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
        </div>

        <div className="card-horizontal glass">
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
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <h2 className="section-title">Club Memories</h2>
        <div className="gallery-grid">
          <div className="gallery-item glass">
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600" alt="Work" />
            <div className="gallery-overlay">
              <h4>Code Fest 2025</h4>
              <p>Workshop Series</p>
            </div>
          </div>
          <div className="gallery-item glass">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600" alt="Work" />
            <div className="gallery-overlay">
              <h4>Team Building</h4>
              <p>Indoor Fun</p>
            </div>
          </div>
          <div className="gallery-item glass">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600" alt="Work" />
            <div className="gallery-overlay">
              <h4>Annual Hack</h4>
              <p>Global Competition</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2 className="section-title">About Us</h2>
        <div className="card-horizontal-about glass">
          <div className="about-icon">
            <img src="/assets/logo.png" alt="Logo mini" />
          </div>
          <div className="about-text">
            <h3>Who are we?</h3>
            <p style={{ color: 'var(--text-dim)', marginTop: '10px' }}>GNX is a community of passionate developers and innovators.</p>
          </div>
        </div>

        <div className="card-horizontal-about glass">
          <div className="about-text">
            <h3>What we do?</h3>
            <p style={{ color: 'var(--text-dim)', marginTop: '10px' }}>We organize workshops, hackathons, and collaborative projects.</p>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=300" alt="Team activity" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <h2 className="section-title">Core Team</h2>
        <div className="team-grid">
          <div className="team-card glass">
            <div className="team-img-wrapper">
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300" alt="Lead" />
            </div>
            <h3>Arnav Singh</h3>
            <p>Founder / Lead</p>
            <div className="team-socials">
              <a href="#"><i className='bx bxl-linkedin'></i></a>
              <a href="#"><i className='bx bxl-github'></i></a>
            </div>
          </div>
          <div className="team-card glass">
            <div className="team-img-wrapper">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300" alt="Tech" />
            </div>
            <h3>Riya Das</h3>
            <p>Technical Architect</p>
            <div className="team-socials">
              <a href="#"><i className='bx bxl-linkedin'></i></a>
              <a href="#"><i className='bx bxl-github'></i></a>
            </div>
          </div>
          <div className="team-card glass">
            <div className="team-img-wrapper">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" alt="Design" />
            </div>
            <h3>Devansh Jha</h3>
            <p>UX/UI Specialist</p>
            <div className="team-socials">
              <a href="#"><i className='bx bxl-linkedin'></i></a>
              <a href="#"><i className='bx bxl-github'></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="feedback-section">
        <h2 className="section-title-feedback">WE VALUE YOUR FEEDBACK !!</h2>
        <p className="feedback-sub">Let us know how we can improve your experience at GNX</p>

        <form className="feedback-form" onSubmit={(e) => { e.preventDefault(); alert('Feedback sent!'); }}>
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
          <button type="submit" className="btn-submit">
            SEND MESSAGE <i className='bx bx-send'></i>
          </button>
        </form>
      </section>
    </main>
  );
};

export default Home;
