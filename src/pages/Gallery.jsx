import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import GalleryModal from '../components/GalleryModal';

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', images: [] });
  const [activeYear, setActiveYear] = useState('2026');

  const openGallery = (title, images) => {
    setModalData({ title, images });
    setModalOpen(true);
  };

  const years = ['2026', '2025'];

  const galleryData = [
    {
      year: "2026",
      images: [
        { url: "/assets/gallery/FB_IMG_1776603317665.jpg.jpeg", title: "GNX 2026" },
        { url: "/assets/gallery/FB_IMG_1776603339662.jpg.jpeg", title: "GNX 2026" },
        { url: "/assets/gallery/FB_IMG_1776603349482.jpg.jpeg", title: "GNX 2026" },
        { url: "/assets/gallery/FB_IMG_1776603363552.jpg.jpeg", title: "GNX 2026" }
      ]
    },
    {
      year: "2025", 
      images: [
        { url: "/assets/gallery/IMG-20260419-WA0020.jpg.jpeg", title: "GNX 2025" },
        { url: "/assets/gallery/IMG-20260419-WA0019.jpg.jpeg", title: "GNX 2025" },
        { url: "/assets/gallery/IMG_20260419_200040.jpg.jpeg", title: "GNX 2025" },
        { url: "/assets/gallery/IMG-20260419-WA0017.jpg.jpeg", title: "GNX 2025" },
      ]
    }
  ];

  const currentGallery = galleryData.find(g => g.year === activeYear) || { year: activeYear, images: [] };

  return (
    <main className="page-padding">
      <Helmet>
        <title>Gallery | GNX Tech Club</title>
      </Helmet>

      <section className="gallery-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          OUR MOMENTS
        </motion.h1>
        <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '20px auto 40px' }}>
          Explore our journey through the years — building, learning, and fostering innovation.
        </p>

        {/* ── YEAR SELECTOR (Consistent with Team Page) ── */}
        <div className="year-selector-container" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          flexWrap: 'wrap',
          marginBottom: '80px',
          padding: '0 20px'
        }}>
          {years.map(year => (
            <motion.button
              key={year}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveYear(year)}
              className={`year-tab ${activeYear === year ? 'active' : ''}`}
              style={{ minWidth: '120px' }}
            >
              {year}
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeYear}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="gallery-year-section"
        >
          {currentGallery.images.length > 0 ? (
            <div className="gallery-detailed-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '30px',
              maxWidth: '1300px',
              margin: '0 auto'
            }}>
              {currentGallery.images.map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="gallery-item-detailed glass"
                  onClick={() => openGallery(img.title, [img])}
                  style={{ 
                    borderRadius: '24px', 
                    overflow: 'hidden', 
                    height: '400px',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                >
                  <img src={img.url} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s' }} />
                  <div className="gallery-overlay" style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(8, 8, 15, 0.9), transparent)',
                    display: 'flex',
                    alignItems: 'bottom',
                    padding: '30px',
                    opacity: 0,
                    transition: '0.3s'
                  }}>
                    <h3 style={{ color: '#fff', fontSize: '1.2rem', marginTop: 'auto' }}>{img.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '100px 0', color: 'var(--text-dim)' }}>
              <i className='bx bx-image-alt' style={{ fontSize: '4rem', marginBottom: '20px' }}></i>
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
        .gallery-item-detailed:hover img { transform: scale(1.1); }
        .gallery-item-detailed:hover .gallery-overlay { opacity: 1; }
        .page-padding { padding: 180px 5% 100px; }
        @media (max-width: 768px) {
          .year-selector-container button { padding: 10px 20px; min-width: 100px; font-size: 0.9rem; }
        }
      `}</style>
    </main>
  );
};

export default Gallery;


