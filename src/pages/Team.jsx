import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import GalleryModal from '../components/GalleryModal';
import BatchSection from '../components/BatchSection';

const Team = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', images: [] });
  const [activeYear, setActiveYear] = useState('2025-26');

  const openGallery = (title, images) => {
    setModalData({ title, images });
    setModalOpen(true);
  };

  const years = ['2025-26', '2024-25'];

  const teamData = [
    {
      yearId: '2025-26',
      batch: "Session 2025 - 2026",
      gallery: [],
      members: [
        { 
          name: "Rajdeep Sadhu", 
          role: "President", 
          bio: "Leading GNX with a vision for open-source excellence and innovation.", 
          // TODO: Upload image to public/Member/2025-2026/rajdeep.jpg
          img: "/Member/2025-2026/rajdeep.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Akshay Chandra", 
          role: "Vice-President", 
          bio: "Strategizing and overseeing the club's technical initiatives.", 
          // TODO: Upload image to public/Member/2025-2026/akshay.jpg
          img: "/Member/2025-2026/akshay.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Ayantika Chaudhuri", 
          role: "Female Lead", 
          bio: "Promoting diversity and empowerment within the technical community.", 
          // TODO: Upload image to public/Member/2025-2026/ayantika.jpg
          img: "/Member/2025-2026/ayantika.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Parthiv Ghosh", 
          role: "Technical Team Lead", 
          bio: "Architecting the technical foundation and system infrastructure.", 
          // TODO: Upload image to public/Member/2025-2026/parthiv.jpg
          img: "/Member/2025-2026/parthiv.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Protysuh Banik", 
          role: "Media and PR Lead", 
          bio: "Managing the club's presence and communications with the world.", 
          // TODO: Upload image to public/Member/2025-2026/protysuh.jpg
          img: "/Member/2025-2026/protysuh.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Ronak Pathak", 
          role: "Event Organizers Lead", 
          bio: "Masterminding the logistics and execution of GNX events.", 
          // TODO: Upload image to public/Member/2025-2026/ronak.jpg
          img: "/Member/2025-2026/ronak.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Krishna Raj", 
          role: "Design Team Lead", 
          bio: "Crafting the visual identity and brand aesthetics of GNX.", 
          // TODO: Upload image to public/Member/2025-2026/krishna.jpg
          img: "/Member/2025-2026/krishna.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Aditya Anand", 
          role: "Technical Team", 
          bio: "Driving core technical developments and open-source projects.", 
          // TODO: Upload image to public/Member/2025-2026/aditya.jpg
          img: "/Member/2025-2026/aditya.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Borshan Haque", 
          role: "Technical Team", 
          bio: "Building robust systems and backend architectures.", 
          // TODO: Upload image to public/Member/2025-2026/borshan.jpg
          img: "/Member/2025-2026/borshan.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Srijit Sahoo", 
          role: "Media and PR", 
          bio: "Managing networking and public outreach campaigns.", 
          // TODO: Upload image to public/Member/2025-2026/srijit.jpg
          img: "/Member/2025-2026/srijit.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Saurav Kumar Singh", 
          role: "Event Organizer", 
          bio: "Ensuring seamless coordination and event flow.", 
          // TODO: Upload image to public/Member/2025-2026/saurav.jpg
          img: "/Member/2025-2026/saurav.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Randhir Raj", 
          role: "Design Team", 
          bio: "Creating impactful UI/UX and digital graphics.", 
          // TODO: Upload image to public/Member/2025-2026/randhir.jpg
          img: "/Member/2025-2026/randhir.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Sambhas Maiti", 
          role: "Technical Team", 
          bio: "Exploring new tech stacks and implementing solutions.", 
          // TODO: Upload image to public/Member/2025-2026/sambhas.jpg
          img: "/Member/2025-2026/sambhas.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Sumit Agarwal", 
          role: "Technical Team", 
          bio: "Focused on problem-solving and code optimization.", 
          // TODO: Upload image to public/Member/2025-2026/sumit_a.jpg
          img: "/Member/2025-2026/sumit_a.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Pragati Pandey", 
          role: "Media and PR", 
          bio: "Bridging the gap between GNX and the student community.", 
          // TODO: Upload image to public/Member/2025-2026/pragati.jpg
          img: "/Member/2025-2026/pragati.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Trisha Das", 
          role: "Media and PR", 
          bio: "Content creation and social media management.", 
          // TODO: Upload image to public/Member/2025-2026/trisha.jpg
          img: "/Member/2025-2026/trisha.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Sayantika Ray", 
          role: "Media and PR", 
          bio: "Enhancing the club's public image and outreach.", 
          // TODO: Upload image to public/Member/2025-2026/sayantika.jpg
          img: "/Member/2025-2026/sayantika.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Freja Chandani", 
          role: "Media and PR", 
          bio: "Coordinating communications and internal PR.", 
          // TODO: Upload image to public/Member/2025-2026/freja.jpg
          img: "/Member/2025-2026/freja.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Niloy Kar", 
          role: "Media and PR", 
          bio: "Managing media relations and event coverage.", 
          // TODO: Upload image to public/Member/2025-2026/niloy.jpg
          img: "/Member/2025-2026/niloy.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Harsh Shaw", 
          role: "Event Organizer", 
          bio: "Logistics expert for large-scale technical events.", 
          // TODO: Upload image to public/Member/2025-2026/harsh.jpg
          img: "/Member/2025-2026/harsh.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Sumit Kumar Singh", 
          role: "Event Organizer", 
          bio: "Coordinating team efforts for flawless event execution.", 
          // TODO: Upload image to public/Member/2025-2026/sumit_k.jpg
          img: "/Member/2025-2026/sumit_k.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Subhadip Gayen", 
          role: "Event Organizer", 
          bio: "On-ground event management and technical support.", 
          // TODO: Upload image to public/Member/2025-2026/subhadip.jpg
          img: "/Member/2025-2026/subhadip.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Rishav Raj Singh", 
          role: "Design Team", 
          bio: "Specializing in brand identity and visual storytelling.", 
          // TODO: Upload image to public/Member/2025-2026/rishav.jpg
          img: "/Member/2025-2026/rishav.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Sarbojit Roy", 
          role: "Design Team", 
          bio: "Motion graphics and creative asset design.", 
          // TODO: Upload image to public/Member/2025-2026/sarbojit.jpg
          img: "/Member/2025-2026/sarbojit.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Sania Arman", 
          role: "Design Team", 
          bio: "User-centric design and intuitive interface crafting.", 
          // TODO: Upload image to public/Member/2025-2026/sania.jpg
          img: "/Member/2025-2026/sania.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Kumari Sanjana", 
          role: "Design Team", 
          bio: "Typography and abstract design concept development.", 
          // TODO: Upload image to public/Member/2025-2026/sanjana.jpg
          img: "/Member/2025-2026/sanjana.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        }
      ]
    },
    {
      yearId: '2024-25',
      batch: "Session 2024 - 2025",
      gallery: [
        { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800", title: "Inaugural Workshop" },
        { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800", title: "Founding Team Meet" }
      ],
      members: [
        { 
          name: "Arpan Chowdhury", 
          role: "President", 
          bio: "Founding visionary leading GNX during its formative session.", 
          // TODO: Upload image to public/Member/2024-2025/arpan_c.jpg
          img: "/Member/2024-2025/arpan_c.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Vaibhav Kundu", 
          role: "Vice-President", 
          bio: "Pioneering technical growth and community leadership.", 
          // TODO: Upload image to public/Member/2024-2025/vaibhav.jpg
          img: "/Member/2024-2025/vaibhav.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Ahana Biswas", 
          role: "Female Lead", 
          bio: "Championing technical education and diversity at GNX.", 
          // TODO: Upload image to public/Member/2024-2025/ahana.jpg
          img: "/Member/2024-2025/ahana.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Mayukh Bhowmik", 
          role: "Tech Team", 
          bio: "Technical specialist driving early-stage engineering projects.", 
          // TODO: Upload image to public/Member/2024-2025/mayukh_b.jpg
          img: "/Member/2024-2025/mayukh_b.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Mayukh Mondal", 
          role: "Dev and App Team", 
          bio: "Building the digital foundation for GNX web initiatives.", 
          // TODO: Upload image to public/Member/2024-2025/mayukh_m.jpg
          img: "/Member/2024-2025/mayukh_m.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Ronak Pathak", 
          role: "Design Team", 
          bio: "Establishing the early visual identity of the GNX brand.", 
          // TODO: Upload image to public/Member/2024-2025/ronak.jpg
          img: "/Member/2024-2025/ronak.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Rajdeep Sadhu", 
          role: "Event Organizer", 
          bio: "Coordinating the first waves of GNX technical workshops.", 
          // TODO: Upload image to public/Member/2024-2025/rajdeep.jpg
          img: "/Member/2024-2025/rajdeep.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Tuhin Ghosh", 
          role: "Media and PR", 
          bio: "Drafting the initial outreach strategies for GNX.", 
          // TODO: Upload image to public/Member/2024-2025/tuhin.jpg
          img: "/Member/2024-2025/tuhin.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Sebanti Dasgupta", 
          role: "Tech Team", 
          bio: "Focusing on technical documentation and system research.", 
          // TODO: Upload image to public/Member/2024-2025/sebanti.jpg
          img: "/Member/2024-2025/sebanti.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Sukalyan Roy", 
          role: "Tech Team", 
          bio: "Engineering lead for open-source utility tools.", 
          // TODO: Upload image to public/Member/2024-2025/sukalyan.jpg
          img: "/Member/2024-2025/sukalyan.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Avishek Sen", 
          role: "Tech Team", 
          bio: "Specialist in systems engineering and performance.", 
          // TODO: Upload image to public/Member/2024-2025/avishek.jpg
          img: "/Member/2024-2025/avishek.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Saujanya Das", 
          role: "Dev and App Team", 
          bio: "Application developer focusing on mobile ecosystems.", 
          // TODO: Upload image to public/Member/2024-2025/saujanya.jpg
          img: "/Member/2024-2025/saujanya.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Srinjoy Pramanik", 
          role: "Dev and App Team", 
          bio: "Frontend architect for core community platforms.", 
          // TODO: Upload image to public/Member/2024-2025/srinjoy.jpg
          img: "/Member/2024-2025/srinjoy.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Parthiv Ghosh", 
          role: "Dev and App Team", 
          bio: "Full-stack developer for automated systems.", 
          // TODO: Upload image to public/Member/2024-2025/parthiv.jpg
          img: "/Member/2024-2025/parthiv.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Krishna Raj", 
          role: "Design Team", 
          bio: "Creative lead for digital assets and typography.", 
          // TODO: Upload image to public/Member/2024-2025/krishna.jpg
          img: "/Member/2024-2025/krishna.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Akshay Chandra", 
          role: "Design Team", 
          bio: "UI/UX designer focused on accessibility.", 
          // TODO: Upload image to public/Member/2024-2025/akshay.jpg
          img: "/Member/2024-2025/akshay.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Ayantika Chaudhuri", 
          role: "Event Organizer", 
          bio: "Lead coordinator for community meetups.", 
          // TODO: Upload image to public/Member/2024-2025/ayantika.jpg
          img: "/Member/2024-2025/ayantika.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Srijit Sahoo", 
          role: "Event Organizer", 
          bio: "Managing event flow and participant engagement.", 
          // TODO: Upload image to public/Member/2024-2025/srijit.jpg
          img: "/Member/2024-2025/srijit.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Soumi Guria", 
          role: "Media and PR", 
          bio: "Communication expert for student collaborations.", 
          // TODO: Upload image to public/Member/2024-2025/soumi.jpg
          img: "/Member/2024-2025/soumi.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Protyush Banik", 
          role: "Media and PR", 
          bio: "Social media strategist for GNX brand growth.", 
          // TODO: Upload image to public/Member/2024-2025/protyush.jpg
          img: "/Member/2024-2025/protyush.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
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



