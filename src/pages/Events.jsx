import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Events = () => {
    const [filter, setFilter] = useState('All');

    const eventCategories = ['All', 'Hackathon', 'Workshop', 'Competition', 'Bootcamp'];

    const allEvents = [
        {
            id: 'hackathon-2026',
            title: 'GNX Hackathon 2026',
            category: 'Hackathon',
            date: 'May 15-17, 2026',
            venue: 'Main Auditorium, NSEC',
            description: '48 hours, unlimited energy drinks, and one goal — build something the world hasn\'t seen yet. Teams of up to 4, prizes worth bragging about.',
            img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
            status: 'Upcoming',
            registrationOpen: true
        },
        {
            id: 'ai-workshop',
            title: 'Foundations of AI/ML',
            category: 'Workshop',
            date: 'May 22, 2026',
            venue: 'Lab 4, CSE Dept',
            description: 'Ever wondered how ChatGPT works under the hood? We\'ll break it down and have you training your own model by the end of the session.',
            img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
            status: 'Upcoming',
            registrationOpen: true
        },
        {
            id: 'webdev-bootcamp',
            title: 'Next-Gen Web Architecture',
            category: 'Bootcamp',
            date: 'June 1-5, 2026',
            venue: 'Hybrid (Online/Offline)',
            description: 'Five days to go from "what is React?" to deploying your own full-stack app. Intensive, practical, and perfect for your portfolio.',
            img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
            status: 'Upcoming',
            registrationOpen: true
        },
        {
            id: 'cybersec-ctf',
            title: 'Root Access CTF',
            category: 'Competition',
            date: 'June 10, 2026',
            venue: 'Virtual Arena',
            description: 'Think you can hack it? Test your skills in cryptography, reverse engineering, and web exploitation. Solo or team — bring your A-game.',
            img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
            status: 'Upcoming',
            registrationOpen: true
        },
        {
            id: 'past-workshop-2025',
            title: 'GNU/Linux Fundamentals',
            category: 'Workshop',
            date: 'Nov 12, 2025',
            venue: 'NSEC Seminar Hall',
            description: 'Where it all started — our very first workshop that introduced 200+ students to the terminal, the kernel, and the beauty of open source.',
            img: 'https://images.unsplash.com/photo-1629654297299-c85062117391?auto=format&fit=crop&q=80&w=800',
            status: 'Concluded',
            registrationOpen: false
        },
        {
            id: 'past-hackathon-2025',
            title: 'GNX Hackathon 2025',
            category: 'Hackathon',
            date: 'Oct 20-22, 2025',
            venue: 'NSEC Main Hall',
            description: 'Our debut hackathon that turned the campus upside down. 200+ participants, sleepless nights, and projects that blew the judges away.',
            img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
            status: 'Concluded',
            registrationOpen: false
        }
    ];

    const filteredEvents = filter === 'All' 
        ? allEvents 
        : allEvents.filter(e => e.category === filter);

    return (
        <main className="events-page">
            <Helmet>
                <title>Events | GNX Tech Club</title>
                <meta name="description" content="Join the upcoming GNX Tech Club events, hackathons, and workshops." />
            </Helmet>

            <section className="events-hero">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                    style={{ textAlign: 'center' }}
                >
                    <span className="events-badge">WHAT'S HAPPENING</span>
                    <h1 className="section-title">OUR EVENTS</h1>
                    <p className="events-hero-subtitle">
                        Hackathons, workshops, bootcamps, and competitions — here's everything we've got planned (and everything we've pulled off so far).
                    </p>
                </motion.div>
            </section>

            <section className="events-filter-section">
                <div className="filter-container">
                    {eventCategories.map(cat => (
                        <motion.button 
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>
            </section>

            <section className="events-grid-section">
                <div className="events-grid-sym">
                    <AnimatePresence mode="popLayout">
                        {filteredEvents.map((event) => (
                            <motion.div 
                                key={event.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className={`event-card-v2 glass ${event.status === 'Concluded' ? 'past-event' : ''}`}
                            >
                                <div className="event-img-wrapper">
                                    <img src={event.img} alt={event.title} loading="lazy" />
                                    <div className={`event-status-tag ${event.status === 'Concluded' ? 'concluded' : ''}`}>
                                        {event.status}
                                    </div>
                                </div>
                                <div className="event-body">
                                    <div className="event-meta-row">
                                        <span><i className='bx bx-tag-alt'></i> {event.category}</span>
                                        <span><i className='bx bx-calendar'></i> {event.date}</span>
                                    </div>
                                    <h3 className="event-title">{event.title}</h3>
                                    <p className="event-desc">{event.description}</p>
                                    <div className="event-venue-row">
                                        <i className='bx bx-map-pin'></i> {event.venue}
                                    </div>
                                    
                                    <div className="event-actions">
                                        {event.registrationOpen ? (
                                            <Link to="/register" className="event-cta-btn">
                                                Save My Spot <i className='bx bx-right-arrow-alt'></i>
                                            </Link>
                                        ) : (
                                            <span className="event-concluded-badge" title="This event has already taken place">
                                                <i className='bx bx-check-circle'></i> Already Happened
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            <style>{`
                .events-page {
                    min-height: 100vh;
                    padding-bottom: 100px;
                }
                .events-hero {
                    padding-top: 180px;
                    padding-bottom: 60px;
                    display: flex;
                    justify-content: center;
                }
                .events-badge {
                    color: var(--primary);
                    font-size: 0.75rem;
                    font-weight: 800;
                    letter-spacing: 4px;
                    margin-bottom: 20px;
                    display: block;
                }
                .events-hero-subtitle {
                    color: var(--text-dim);
                    max-width: 550px;
                    margin: 20px auto 0;
                    line-height: 1.7;
                    font-size: 1rem;
                }

                /* Symmetrical Filter Bar */
                .events-filter-section {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 50px;
                    padding: 0 20px;
                }
                .filter-container {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                    justify-content: center;
                    background: rgba(255,255,255,0.02);
                    padding: 6px;
                    border-radius: 16px;
                    border: 1px solid rgba(255,255,255,0.05);
                }
                .filter-btn {
                    padding: 10px 22px;
                    border-radius: 12px;
                    border: none;
                    background: transparent;
                    color: var(--text-dim);
                    cursor: pointer;
                    font-weight: 700;
                    font-size: 0.85rem;
                    transition: 0.3s;
                    font-family: inherit;
                }
                .filter-btn:hover { color: #fff; }
                .filter-btn.active {
                    background: var(--primary);
                    color: #fff;
                    box-shadow: 0 4px 15px var(--primary-glow);
                }

                /* Symmetrical 2-column grid */
                .events-grid-section {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 0 5%;
                }
                .events-grid-sym {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 30px;
                }

                .event-card-v2 {
                    border-radius: 24px;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
                    border: 1px solid rgba(255,255,255,0.05);
                    display: flex;
                    flex-direction: column;
                }
                .event-card-v2:hover {
                    transform: translateY(-8px);
                    border-color: rgba(230, 62, 0, 0.2);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.35);
                }
                .event-img-wrapper {
                    height: 200px;
                    position: relative;
                    overflow: hidden;
                }
                .event-img-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s;
                }
                .event-card-v2:hover .event-img-wrapper img {
                    transform: scale(1.05);
                }
                .event-status-tag {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    background: rgba(8, 8, 15, 0.8);
                    backdrop-filter: blur(10px);
                    padding: 5px 14px;
                    border-radius: 50px;
                    font-size: 0.65rem;
                    font-weight: 800;
                    letter-spacing: 1px;
                    color: var(--primary);
                    border: 1px solid rgba(230, 62, 0, 0.3);
                    text-transform: uppercase;
                }
                .event-status-tag.concluded {
                    color: rgba(255,255,255,0.4);
                    border-color: rgba(255,255,255,0.1);
                }
                .event-body {
                    padding: 28px;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }
                .event-meta-row {
                    display: flex;
                    gap: 18px;
                    margin-bottom: 14px;
                    font-size: 0.72rem;
                    color: var(--text-dim);
                    font-weight: 600;
                }
                .event-meta-row i { color: var(--primary); margin-right: 4px; }
                .event-title { font-size: 1.25rem; margin-bottom: 10px; font-weight: 800; }
                .event-desc { color: var(--text-dim); font-size: 0.9rem; line-height: 1.6; margin-bottom: 16px; flex: 1; }
                .event-venue-row { font-size: 0.8rem; color: var(--text-dim); display: flex; align-items: center; gap: 6px; margin-bottom: 20px; }
                .event-venue-row i { font-size: 1rem; color: var(--primary); }

                .event-actions { display: flex; align-items: center; }
                .event-cta-btn {
                    background: var(--primary);
                    color: #fff;
                    padding: 10px 22px;
                    border-radius: 10px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 0.8rem;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    box-shadow: 0 4px 15px var(--primary-glow);
                    transition: 0.3s;
                }
                .event-cta-btn:hover { transform: scale(1.03); filter: brightness(1.1); }
                .event-concluded-badge {
                    color: var(--text-dim);
                    font-size: 0.8rem;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                }

                .past-event { opacity: 0.6; }
                .past-event:hover { opacity: 1; }

                @media (max-width: 768px) {
                    .events-grid-sym { grid-template-columns: 1fr; }
                    .events-hero { padding-top: 140px; }
                    .filter-container { gap: 4px; }
                    .filter-btn { padding: 8px 14px; font-size: 0.75rem; }
                }
            `}</style>
        </main>
    );
};

export default Events;
