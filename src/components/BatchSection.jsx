import React from 'react';
import { motion } from 'framer-motion';
import MemberCard from './MemberCard';

const BatchSection = ({ section, onBatchClick, onMemberClick }) => {
  // Group members by role for symmetrical department sections
  const roleOrder = [
    'President', 'Vice-President', 'Female Lead',
    'Technical Team Lead', 'Media and PR Lead', 'Event Organizers Lead', 'Design Team Lead',
    'Tech Team', 'Technical Team', 'Dev and App Team', 'Design Team',
    'Media and PR', 'Event Organizer'
  ];

  // Separate leadership (top 3) from departments
  const leadership = section.members.filter(m => 
    ['President', 'Vice-President', 'Female Lead'].includes(m.role)
  );
  
  const leads = section.members.filter(m => 
    m.role.includes('Lead') && !['President', 'Vice-President', 'Female Lead'].includes(m.role)
  );
  
  const regularMembers = section.members.filter(m => 
    !['President', 'Vice-President', 'Female Lead'].includes(m.role) && !m.role.includes('Lead')
  );

  // Group regular members by their role/department
  const departments = {};
  regularMembers.forEach(m => {
    if (!departments[m.role]) departments[m.role] = [];
    departments[m.role].push(m);
  });

  const hasGroupedLayout = leadership.length > 0;

  return (
    <div className="team-batch-section" style={{ marginBottom: '100px' }}>
      {/* Section Header */}
      <div className="batch-header-modern" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '60px',
        gap: '20px'
      }}>
        <div style={{ height: '1px', flex: 1, maxWidth: '200px', background: 'linear-gradient(90deg, transparent, var(--primary))', opacity: 0.3 }}></div>
        <h2 style={{ fontSize: '1.6rem', color: '#fff', fontWeight: '800', textAlign: 'center', letterSpacing: '2px', textTransform: 'uppercase' }}>{section.batch}</h2>
        <div style={{ height: '1px', flex: 1, maxWidth: '200px', background: 'linear-gradient(90deg, var(--primary), transparent)', opacity: 0.3 }}></div>
      </div>

      {hasGroupedLayout ? (
        <>
          {/* ── Leadership Row: Centered, symmetrical 3-column ── */}
          {leadership.length > 0 && (
            <div style={{ marginBottom: '70px' }}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '30px' }}
              >
                <span style={{
                  fontSize: '10px',
                  fontWeight: '800',
                  letterSpacing: '3px',
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  padding: '6px 20px',
                  background: 'rgba(230, 62, 0, 0.06)',
                  borderRadius: '20px',
                  border: '1px solid rgba(230, 62, 0, 0.12)'
                }}>Leadership</span>
              </motion.div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${Math.min(leadership.length, 3)}, minmax(0, 320px))`,
                gap: '30px',
                justifyContent: 'center',
                maxWidth: '1100px',
                margin: '0 auto'
              }}>
                {leadership.map((m, i) => (
                  <MemberCard key={m.name} member={m} index={i} onClick={() => onMemberClick(m)} />
                ))}
              </div>
            </div>
          )}

          {/* ── Team Leads Row: Symmetrical grid ── */}
          {leads.length > 0 && (
            <div style={{ marginBottom: '70px' }}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '30px' }}
              >
                <span style={{
                  fontSize: '10px',
                  fontWeight: '800',
                  letterSpacing: '3px',
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  padding: '6px 20px',
                  background: 'rgba(230, 62, 0, 0.06)',
                  borderRadius: '20px',
                  border: '1px solid rgba(230, 62, 0, 0.12)'
                }}>Team Leads</span>
              </motion.div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${Math.min(leads.length, 4)}, minmax(0, 280px))`,
                gap: '30px',
                justifyContent: 'center',
                maxWidth: '1200px',
                margin: '0 auto'
              }}>
                {leads.map((m, i) => (
                  <MemberCard key={m.name} member={m} index={i} onClick={() => onMemberClick(m)} />
                ))}
              </div>
            </div>
          )}

          {/* ── Department Sections ── */}
          {Object.entries(departments).map(([role, members]) => (
            <div key={role} style={{ marginBottom: '60px' }}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '30px' }}
              >
                <span style={{
                  fontSize: '10px',
                  fontWeight: '800',
                  letterSpacing: '3px',
                  color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                  padding: '6px 20px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>{role}</span>
              </motion.div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fit, minmax(260px, 1fr))`,
                gap: '25px',
                justifyContent: 'center',
                maxWidth: '1200px',
                margin: '0 auto'
              }}>
                {members.map((m, i) => (
                  <MemberCard key={m.name} member={m} index={i} onClick={() => onMemberClick(m)} />
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        /* Fallback: flat grid for sessions without grouped roles */
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {section.members.length > 0 ? (
            section.members.map((m, i) => (
              <MemberCard key={i} member={m} index={i} onClick={() => onMemberClick(m)} />
            ))
          ) : (
            <p style={{ gridColumn: '1/-1', textAlign: 'center', color: 'var(--text-dim)', padding: '60px 0' }}>
              Core team members for this session haven't been added to the registry yet.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default BatchSection;
