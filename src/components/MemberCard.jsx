import React from 'react';
import { motion } from 'framer-motion';

const MemberCard = ({ member, onClick, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="team-card-premium glass"
      onClick={onClick}
      style={{ 
        borderRadius: '24px', 
        padding: '40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
    >
      <div className="team-avatar-wrapper" style={{
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        margin: '0 auto 25px',
        border: '3px solid var(--primary)',
        padding: '5px',
        background: 'rgba(230, 62, 0, 0.1)'
      }}>
        <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
      </div>
      
      <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{member.name}</h3>
      <span style={{ 
        color: 'var(--primary)', 
        fontSize: '11px', 
        fontWeight: '700', 
        textTransform: 'uppercase',
        letterSpacing: '2px',
        display: 'block',
        marginBottom: '15px'
      }}>{member.role}</span>
      <p style={{ color: 'var(--text-dim)', fontSize: '14px', lineHeight: '1.6' }}>{member.bio}</p>
      
      <div className="team-social-mini" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
        {member.linkedin && (
          <motion.a 
            whileHover={{ scale: 1.2, color: 'var(--primary)', translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            href={member.linkedin} target="_blank" rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()} 
            style={{ color: 'var(--text-dim)', fontSize: '1.2rem', transition: 'color 0.2s' }} 
            title="LinkedIn"
          >
            <i className='bx bxl-linkedin'></i>
          </motion.a>
        )}
        {member.github && (
          <motion.a 
            whileHover={{ scale: 1.2, color: 'var(--primary)', translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            href={member.github} target="_blank" rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()} 
            style={{ color: 'var(--text-dim)', fontSize: '1.2rem', transition: 'color 0.2s' }} 
            title="GitHub"
          >
            <i className='bx bxl-github'></i>
          </motion.a>
        )}
        {member.instagram && (
          <motion.a 
            whileHover={{ scale: 1.2, color: 'var(--primary)', translateY: -3 }}
            whileTap={{ scale: 0.95 }}
            href={member.instagram} target="_blank" rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()} 
            style={{ color: 'var(--text-dim)', fontSize: '1.2rem', transition: 'color 0.2s' }} 
            title="Instagram"
          >
            <i className='bx bxl-instagram'></i>
          </motion.a>
        )}
      </div>
      
      <style>{`
        .team-card-premium:hover { transform: translateY(-10px); background: rgba(255, 255, 255, 0.05); }
      `}</style>
    </motion.div>
  );
};

export default MemberCard;
