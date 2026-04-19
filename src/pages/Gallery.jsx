import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import GalleryModal from '../components/GalleryModal';

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', images: [] });
  const [activeYear, setActiveYear] = useState('2025');

  const openGallery = (title, images) => {
    setModalData({ title, images });
    setModalOpen(true);
  };

  const years = ['2025', '2024'];

  const galleryData = [
    {
      year: "2025",
      images: [
        { url: "/assets/gallery/FB_IMG_1776603317665.jpg.jpeg", title: "GNX Community 2025" },
        { url: "/assets/gallery/FB_IMG_1776603339662.jpg.jpeg", title: "Workshop Session" },
        { url: "/assets/gallery/FB_IMG_1776603349482.jpg.jpeg", title: "Team Building" },
        { url: "/assets/gallery/FB_IMG_1776603363552.jpg.jpeg", title: "Tech Talk 2025" }
      ]
    },
    {
      year: "2024", 
      images: [
        { url: "/assets/gallery/IMG-20260419-WA0020.jpg.jpeg", title: "Inaugural Session" },
        { url: "/assets/gallery/IMG-20260419-WA0019.jpg.jpeg", title: "First Workshop" },
        { url: "/assets/gallery/IMG_20260419_200040.jpg.jpeg", title: "Founding Members" },
        { url: "/assets/gallery/IMG-20260419-WA0017.jpg.jpeg", title: "Open Source Day" },
      ]
    }
  ];

  const currentGallery = galleryData.find(g => g.year === activeYear) || { year: activeYear, images: [] };

  return (
    <main className="gallery-page">
      <Helmet>
        <title>Gallery | GNX Tech Club</title>
        <meta name="description" content="Explore the journey of GNX Tech Club through photos — workshops, hackathons, and community moments." />
      </Helmet>

      <section className="gallery-hero" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="gallery-badge">SNAPSHOTS</span>
          <h1 className="section-title">OUR MEMORIES</h1>
          <p className="gallery-subtitle">
            Workshops, hackathons, team outings, and everything in between — this is what GNX looks like in action.
          </p>
        </motion.div>

        {/* ── YEAR SELECTOR ── */}
        <div className="gallery-year-selector">
          {years.map(year => (
            <motion.button
              key={year}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveYear(year)}
              className={`year-tab ${activeYear === year ? 'active' : ''}`}
            >
              {year}
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeYear}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="gallery-content"
        >
          {currentGallery.images.length > 0 ? (
            <div className="gallery-sym-grid">
              {currentGallery.images.map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="gallery-card glass"
                  onClick={() => openGallery(img.title, [img])}
                >
                  <img src={img.url} alt={img.title} loading="lazy" />
                  <div className="gallery-card-overlay">
                    <div className="gallery-card-info">
                      <h3>{img.title}</h3>
                      <span>{activeYear}</span>
                    </div>
                    <div className="gallery-card-action">
                      <i className='bx bx-expand-alt'></i>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="gallery-empty">
              <i className='bx bx-image-alt'></i>
              <p>No memories archived for {activeYear} yet.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <GalleryModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        images={modalData.images}
        title={modalData.title}
      />
      
      <style>{`
        .gallery-page { padding: 180px 5% 100px; min-height: 100vh; }
        .gallery-badge {
          color: var(--primary);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 4px;
          margin-bottom: 20px;
          display: block;
        }
        .gallery-subtitle {
          color: var(--text-dim);
          max-width: 550px;
          margin: 20px auto 0;
          line-height: 1.7;
          font-size: 1rem;
        }
        .gallery-year-selector {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
          margin: 50px 0 70px;
        }
        .gallery-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Symmetrical 2x2 Grid */
        .gallery-sym-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .gallery-card {
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          aspect-ratio: 4 / 3;
        }
        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .gallery-card:hover img {
          transform: scale(1.08);
        }
        .gallery-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8, 8, 15, 0.85) 0%, rgba(8, 8, 15, 0.2) 40%, transparent 100%);
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 28px;
          opacity: 0;
          transition: opacity 0.4s;
        }
        .gallery-card:hover .gallery-card-overlay {
          opacity: 1;
        }
        .gallery-card-info h3 {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .gallery-card-info span {
          font-size: 0.75rem;
          color: var(--primary);
          font-weight: 700;
          letter-spacing: 1px;
        }
        .gallery-card-action {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: #fff;
          transition: 0.3s;
          flex-shrink: 0;
        }
        .gallery-card:hover .gallery-card-action {
          background: var(--primary);
        }

        .gallery-empty {
          text-align: center;
          padding: 80px 0;
          color: var(--text-dim);
        }
        .gallery-empty i {
          font-size: 3.5rem;
          margin-bottom: 16px;
          display: block;
          opacity: 0.4;
        }

        @media (max-width: 768px) {
          .gallery-page { padding-top: 140px; }
          .gallery-sym-grid { grid-template-columns: 1fr; }
          .gallery-card { aspect-ratio: 16 / 10; }
          .gallery-year-selector button { min-width: 100px; padding: 10px 20px; font-size: 0.9rem; }
        }
      `}</style>
    </main>
  );
};

export default Gallery;
