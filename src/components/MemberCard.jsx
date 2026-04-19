import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MemberCard = ({ member, onClick, index }) => {
  const [imgError, setImgError] = useState(false);

  // Generate initials for fallback avatar
  const initials = member.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.06, 0.5) }}
      className="team-card-premium glass"
      onClick={onClick}
      style={{ 
        borderRadius: '24px', 
        padding: '36px 28px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '320px'
      }}
    >
      {/* Avatar */}
      <div className="team-avatar-wrapper" style={{
        width: '110px',
        height: '110px',
        borderRadius: '50%',
        margin: '0 auto 20px',
        border: '3px solid var(--primary)',
        padding: '4px',
        background: 'rgba(230, 62, 0, 0.08)',
        flexShrink: 0
      }}>
        {imgError ? (
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(230, 62, 0, 0.2), rgba(230, 62, 0, 0.05))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            fontWeight: '800',
            color: 'var(--primary)',
            letterSpacing: '2px'
          }}>
            {initials}
          </div>
        ) : (
          <img 
            src={member.img} 
            alt={member.name} 
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
          />
        )}
      </div>
      
      {/* Name */}
      <h3 style={{ fontSize: '1.2rem', marginBottom: '6px', fontWeight: '700' }}>{member.name}</h3>
      
      {/* Role Badge */}
      <span style={{ 
        color: 'var(--primary)', 
        fontSize: '10px', 
        fontWeight: '800', 
        textTransform: 'uppercase',
        letterSpacing: '2px',
        display: 'inline-block',
        marginBottom: '12px',
        padding: '4px 12px',
        background: 'rgba(230, 62, 0, 0.08)',
        borderRadius: '20px'
      }}>{member.role}</span>
      
      {/* Bio */}
      <p style={{ 
        color: 'var(--text-dim)', 
        fontSize: '13px', 
        lineHeight: '1.6',
        flex: 1,
        display: 'flex',
        alignItems: 'center'
      }}>{member.bio}</p>
      
      {/* Social Links */}
      <div className="team-social-mini" style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '14px' }}>
        {member.linkedin && member.linkedin !== '#' && (
          <motion.a 
            whileHover={{ scale: 1.25, color: 'var(--primary)', y: -3 }}
            whileTap={{ scale: 0.9 }}
            href={member.linkedin} target="_blank" rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()} 
            style={{ color: 'var(--text-dim)', fontSize: '1.15rem', transition: 'color 0.2s' }} 
            title="LinkedIn"
          >
            <i className='bx bxl-linkedin'></i>
          </motion.a>
        )}
        {member.github && member.github !== '#' && (
          <motion.a 
            whileHover={{ scale: 1.25, color: 'var(--primary)', y: -3 }}
            whileTap={{ scale: 0.9 }}
            href={member.github} target="_blank" rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()} 
            style={{ color: 'var(--text-dim)', fontSize: '1.15rem', transition: 'color 0.2s' }} 
            title="GitHub"
          >
            <i className='bx bxl-github'></i>
          </motion.a>
        )}
        {member.instagram && member.instagram !== '#' && (
          <motion.a 
            whileHover={{ scale: 1.25, color: 'var(--primary)', y: -3 }}
            whileTap={{ scale: 0.9 }}
            href={member.instagram} target="_blank" rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()} 
            style={{ color: 'var(--text-dim)', fontSize: '1.15rem', transition: 'color 0.2s' }} 
            title="Instagram"
          >
            <i className='bx bxl-instagram'></i>
          </motion.a>
        )}
      </div>
      
      <style>{`
        .team-card-premium { transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1); }
        .team-card-premium:hover { 
          transform: translateY(-8px); 
          background: rgba(255, 255, 255, 0.04); 
          border-color: rgba(230, 62, 0, 0.15);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
      `}</style>
    </motion.div>
  );
};

export default MemberCard;
