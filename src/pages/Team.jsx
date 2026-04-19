import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import GalleryModal from '../components/GalleryModal';
import BatchSection from '../components/BatchSection';

const Team = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', images: [] });
  const [activeYear, setActiveYear] = useState('2026-27');

  const openGallery = (title, images) => {
    setModalData({ title, images });
    setModalOpen(true);
  };

  const years = ['2026-27', '2025-26'];

  const teamData = [
    {
      yearId: '2026-27',
      batch: "Session 2026 - 2027",
      gallery: [],
      members: [
        { 
          name: "Current Lead", 
          role: "Executive Member", 
          bio: "Leading the 2026-27 session with new technical breakthroughs.", 
          img: "https://i.pravatar.cc/300?u=current",
          gallery: []
        }
      ]
    },
    {
      yearId: '2025-26',
      batch: "Session 2025 - 2026",
      gallery: [
        { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800", title: "Inaugural Workshop" },
        { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800", title: "Founding Team Meet" }
      ],
      members: [
        { 
          name: "Arpan Roy", 
          role: "President", 
          bio: "Visionary founder leading the GNX initiative.", 
          img: "https://i.pravatar.cc/300?u=arpan",
          gallery: [{ url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800", title: "Arpan Roy" }]
        },
        { 
          name: "Ananya Sharma", 
          role: "Technical Lead", 
          bio: "Founding member overseeing system architecture.", 
          img: "https://i.pravatar.cc/300?u=ananya",
          gallery: [{ url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800", title: "Ananya Sharma" }]
        }
      ]
    }
  ];

  const currentBatch = teamData.find(t => t.yearId === activeYear) || { batch: `Session ${activeYear}`, members: [], gallery: [] };

  return (
    <main className="page-padding">
      <Helmet>
        <title>Our Team | GNX Tech Club</title>
      </Helmet>

      <section className="team-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          CORE ENGINE
        </motion.h1>
        <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '20px auto 40px' }}>
          Navigate through our history and meet the minds behind the GNX technical ecosystem.
        </p>

        {/* ── YEAR SELECTOR (As per user image) ── */}
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
            >
              {year}
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeYear}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
        >
          <BatchSection 
            section={currentBatch}
            onBatchClick={() => openGallery(`${currentBatch.batch} Gallery`, currentBatch.gallery)}
            onMemberClick={(member) => openGallery(`${member.name}'s Gallery`, member.gallery)}
          />
        </motion.div>
      </AnimatePresence>

      <GalleryModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        images={modalData.images}
        title={modalData.title}
      />

      <style>{`
        .page-padding { padding: 180px 5% 100px; }
        @media (max-width: 768px) {
          .year-selector-container { gap: 10px; }
          .year-selector-container button { padding: 10px 20px; min-width: 110px; font-size: 0.9rem; }
        }
      `}</style>
    </main>
  );
};

export default Team;



