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
          bio: "The one steering the ship — passionate about open source, community, and getting things done.", 
          // TODO: Upload image to public/Member/2025-2026/rajdeep.jpg
          img: "/Member/2025-2026/rajdeep.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Akshay Chandra", 
          role: "Vice-President", 
          bio: "Keeps the big picture in focus while making sure nothing falls through the cracks.", 
          // TODO: Upload image to public/Member/2025-2026/akshay.jpg
          img: "/Member/2025-2026/akshay.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Ayantika Chaudhuri", 
          role: "Female Lead", 
          bio: "Making sure every voice is heard — championing inclusivity and mentoring newcomers.", 
          // TODO: Upload image to public/Member/2025-2026/ayantika.jpg
          img: "/Member/2025-2026/ayantika.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Parthiv Ghosh", 
          role: "Technical Team Lead", 
          bio: "The person you go to when something breaks. Leads the tech team and builds the tools we all rely on.", 
          // TODO: Upload image to public/Member/2025-2026/parthiv.jpg
          img: "/Member/2025-2026/parthiv.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Protysuh Banik", 
          role: "Media and PR Lead", 
          bio: "The storyteller — makes sure the world knows what GNX is up to, one post at a time.", 
          // TODO: Upload image to public/Member/2025-2026/protysuh.jpg
          img: "/Member/2025-2026/protysuh.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Ronak Pathak", 
          role: "Event Organizers Lead", 
          bio: "If there's an event happening smoothly, it's because this person planned every detail.", 
          // TODO: Upload image to public/Member/2025-2026/ronak.jpg
          img: "/Member/2025-2026/ronak.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Krishna Raj", 
          role: "Design Team Lead", 
          bio: "The creative eye — shapes how GNX looks and feels, from posters to presentations.", 
          // TODO: Upload image to public/Member/2025-2026/krishna.jpg
          img: "/Member/2025-2026/krishna.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Aditya Anand", 
          role: "Technical Team", 
          bio: "Loves diving deep into code and figuring out how things work under the hood.", 
          // TODO: Upload image to public/Member/2025-2026/aditya.jpg
          img: "/Member/2025-2026/aditya.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Borshan Haque", 
          role: "Technical Team", 
          bio: "Backend enthusiast who enjoys building systems that just work, every single time.", 
          // TODO: Upload image to public/Member/2025-2026/borshan.jpg
          img: "/Member/2025-2026/borshan.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Srijit Sahoo", 
          role: "Media and PR", 
          bio: "Connects people, spreads the word, and makes sure no event goes unnoticed.", 
          // TODO: Upload image to public/Member/2025-2026/srijit.jpg
          img: "/Member/2025-2026/srijit.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Saurav Kumar Singh", 
          role: "Event Organizer", 
          bio: "The behind-the-scenes hero who makes sure every event runs like clockwork.", 
          // TODO: Upload image to public/Member/2025-2026/saurav.jpg
          img: "/Member/2025-2026/saurav.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Randhir Raj", 
          role: "Design Team", 
          bio: "Turns ideas into visuals that grab attention and tell a story.", 
          // TODO: Upload image to public/Member/2025-2026/randhir.jpg
          img: "/Member/2025-2026/randhir.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Sambhas Maiti", 
          role: "Technical Team", 
          bio: "Always experimenting with the latest tech — if there's a new framework, he's already tried it.", 
          // TODO: Upload image to public/Member/2025-2026/sambhas.jpg
          img: "/Member/2025-2026/sambhas.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Sumit Agarwal", 
          role: "Technical Team", 
          bio: "Finds elegant solutions to tricky problems — the kind of coder who makes bugs disappear.", 
          // TODO: Upload image to public/Member/2025-2026/sumit_a.jpg
          img: "/Member/2025-2026/sumit_a.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Pragati Pandey", 
          role: "Media and PR", 
          bio: "The bridge between GNX and the rest of the campus — always bringing new people in.", 
          // TODO: Upload image to public/Member/2025-2026/pragati.jpg
          img: "/Member/2025-2026/pragati.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Trisha Das", 
          role: "Media and PR", 
          bio: "Crafts the posts, reels, and stories that keep our socials buzzing with activity.", 
          // TODO: Upload image to public/Member/2025-2026/trisha.jpg
          img: "/Member/2025-2026/trisha.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Sayantika Ray", 
          role: "Media and PR", 
          bio: "Works behind the scenes to make GNX look good — and she's really good at it.", 
          // TODO: Upload image to public/Member/2025-2026/sayantika.jpg
          img: "/Member/2025-2026/sayantika.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Freja Chandani", 
          role: "Media and PR", 
          bio: "Keeps the team informed and aligned — the communication backbone of GNX.", 
          // TODO: Upload image to public/Member/2025-2026/freja.jpg
          img: "/Member/2025-2026/freja.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Niloy Kar", 
          role: "Media and PR", 
          bio: "Our go-to for event coverage — captures every moment worth remembering.", 
          // TODO: Upload image to public/Member/2025-2026/niloy.jpg
          img: "/Member/2025-2026/niloy.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Harsh Shaw", 
          role: "Event Organizer", 
          bio: "Handles the heavy lifting — logistics, coordination, and all the things nobody sees.", 
          // TODO: Upload image to public/Member/2025-2026/harsh.jpg
          img: "/Member/2025-2026/harsh.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Sumit Kumar Singh", 
          role: "Event Organizer", 
          bio: "Brings teams together and makes sure everyone's on the same page when it counts.", 
          // TODO: Upload image to public/Member/2025-2026/sumit_k.jpg
          img: "/Member/2025-2026/sumit_k.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Subhadip Gayen", 
          role: "Event Organizer", 
          bio: "The first to arrive and the last to leave — manages everything on the ground.", 
          // TODO: Upload image to public/Member/2025-2026/subhadip.jpg
          img: "/Member/2025-2026/subhadip.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Rishav Raj Singh", 
          role: "Design Team", 
          bio: "Thinks in colors and shapes — gives GNX's brand identity its unique personality.", 
          // TODO: Upload image to public/Member/2025-2026/rishav.jpg
          img: "/Member/2025-2026/rishav.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Sarbojit Roy", 
          role: "Design Team", 
          bio: "Makes things move — literally. Our go-to for animations and motion graphics.", 
          // TODO: Upload image to public/Member/2025-2026/sarbojit.jpg
          img: "/Member/2025-2026/sarbojit.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Sania Arman", 
          role: "Design Team", 
          bio: "Designs with the user in mind — if it's intuitive and pretty, she probably made it.", 
          // TODO: Upload image to public/Member/2025-2026/sania.jpg
          img: "/Member/2025-2026/sania.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Kumari Sanjana", 
          role: "Design Team", 
          bio: "Has an eye for typography and clean layouts that make content shine.", 
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
          bio: "The one who started it all — built GNX from scratch in its founding year.", 
          // TODO: Upload image to public/Member/2024-2025/arpan_c.jpg
          img: "/Member/2024-2025/arpan_c.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Vaibhav Kundu", 
          role: "Vice-President", 
          bio: "Helped shape GNX's direction and culture from day one.", 
          // TODO: Upload image to public/Member/2024-2025/vaibhav.jpg
          img: "/Member/2024-2025/vaibhav.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Ahana Biswas", 
          role: "Female Lead", 
          bio: "Made sure GNX was a welcoming space for everyone from the very beginning.", 
          // TODO: Upload image to public/Member/2024-2025/ahana.jpg
          img: "/Member/2024-2025/ahana.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Mayukh Bhowmik", 
          role: "Tech Team", 
          bio: "One of the first tech minds who set the technical bar for everything that followed.", 
          // TODO: Upload image to public/Member/2024-2025/mayukh_b.jpg
          img: "/Member/2024-2025/mayukh_b.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Mayukh Mondal", 
          role: "Dev and App Team", 
          bio: "Helped build GNX's first digital presence — our early web and app projects.", 
          // TODO: Upload image to public/Member/2024-2025/mayukh_m.jpg
          img: "/Member/2024-2025/mayukh_m.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Ronak Pathak", 
          role: "Design Team", 
          bio: "Designed GNX's first logo, posters, and the visual language we still use.", 
          // TODO: Upload image to public/Member/2024-2025/ronak.jpg
          img: "/Member/2024-2025/ronak.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Rajdeep Sadhu", 
          role: "Event Organizer", 
          bio: "Organized the very first GNX workshops — laid the groundwork for everything.", 
          // TODO: Upload image to public/Member/2024-2025/rajdeep.jpg
          img: "/Member/2024-2025/rajdeep.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Tuhin Ghosh", 
          role: "Media and PR", 
          bio: "Put GNX on the campus map — got the word out when nobody knew who we were.", 
          // TODO: Upload image to public/Member/2024-2025/tuhin.jpg
          img: "/Member/2024-2025/tuhin.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Sebanti Dasgupta", 
          role: "Tech Team", 
          bio: "Documented everything so the next batch wouldn't have to start from zero.", 
          // TODO: Upload image to public/Member/2024-2025/sebanti.jpg
          img: "/Member/2024-2025/sebanti.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Sukalyan Roy", 
          role: "Tech Team", 
          bio: "Built some of our earliest open-source tools — a true builder at heart.", 
          // TODO: Upload image to public/Member/2024-2025/sukalyan.jpg
          img: "/Member/2024-2025/sukalyan.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Avishek Sen", 
          role: "Tech Team", 
          bio: "The systems thinker — always optimizing, always making things faster.", 
          // TODO: Upload image to public/Member/2024-2025/avishek.jpg
          img: "/Member/2024-2025/avishek.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Saujanya Das", 
          role: "Dev and App Team", 
          bio: "Brought GNX into mobile — built our first app prototypes from the ground up.", 
          // TODO: Upload image to public/Member/2024-2025/saujanya.jpg
          img: "/Member/2024-2025/saujanya.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Srinjoy Pramanik", 
          role: "Dev and App Team", 
          bio: "Made our platforms look good and work smoothly — the frontend foundation.", 
          // TODO: Upload image to public/Member/2024-2025/srinjoy.jpg
          img: "/Member/2024-2025/srinjoy.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Parthiv Ghosh", 
          role: "Dev and App Team", 
          bio: "Full-stack developer who believes in automating everything that can be automated.", 
          // TODO: Upload image to public/Member/2024-2025/parthiv.jpg
          img: "/Member/2024-2025/parthiv.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Krishna Raj", 
          role: "Design Team", 
          bio: "The creative force behind our early digital assets and brand typography.", 
          // TODO: Upload image to public/Member/2024-2025/krishna.jpg
          img: "/Member/2024-2025/krishna.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Akshay Chandra", 
          role: "Design Team", 
          bio: "Made sure our designs weren't just pretty — they were usable by everyone.", 
          // TODO: Upload image to public/Member/2024-2025/akshay.jpg
          img: "/Member/2024-2025/akshay.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Ayantika Chaudhuri", 
          role: "Event Organizer", 
          bio: "Brought people together — from casual meetups to structured events.", 
          // TODO: Upload image to public/Member/2024-2025/ayantika.jpg
          img: "/Member/2024-2025/ayantika.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Srijit Sahoo", 
          role: "Event Organizer", 
          bio: "Kept events running smoothly and made sure everyone had a great time.", 
          // TODO: Upload image to public/Member/2024-2025/srijit.jpg
          img: "/Member/2024-2025/srijit.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Soumi Guria", 
          role: "Media and PR", 
          bio: "Our communication pro — built connections that helped GNX grow fast.", 
          // TODO: Upload image to public/Member/2024-2025/soumi.jpg
          img: "/Member/2024-2025/soumi.jpg",
          linkedin: "#", github: "#", instagram: "#",
          gallery: []
        },
        { 
          name: "Protyush Banik", 
          role: "Media and PR", 
          bio: "Grew our social media from zero — every follower we earned started with his strategy.", 
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
          MEET THE TEAM
        </motion.h1>
        <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '20px auto 40px', lineHeight: 1.7 }}>
          The people behind GNX — the ones who organize the events, write the code, design the posters, and keep the community running.
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



