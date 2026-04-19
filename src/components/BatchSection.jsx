import React from 'react';
import MemberCard from './MemberCard';

const BatchSection = ({ section, onBatchClick, onMemberClick }) => {
  return (
    <div className="team-batch-section" style={{ marginBottom: '100px' }}>
      <div className="batch-header-modern" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '60px',
        padding: '0 10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
          <h2 style={{ fontSize: '1.8rem', color: '#fff', fontWeight: '800' }}>{section.batch}</h2>
          <div style={{ height: '2px', flex: 1, background: 'linear-gradient(90deg, var(--primary), transparent)', opacity: 0.3 }}></div>
        </div>
        
        {section.gallery && section.gallery.length > 0 && (
          <button 
            onClick={onBatchClick}
            className="btn-outline"
            style={{ 
              borderRadius: '12px', 
              padding: '10px 25px', 
              fontSize: '14px',
              borderColor: 'var(--year-border)',
              color: 'var(--year-accent)'
            }}
          >
            Explore Moments <i className='bx bx-images' style={{ marginLeft: '8px' }}></i>
          </button>
        )}
      </div>

      <div className="team-detailed-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {section.members.length > 0 ? (
          section.members.map((m, i) => (
            <MemberCard 
              key={i} 
              member={m} 
              index={i} 
              onClick={() => onMemberClick(m)} 
            />
          ))
        ) : (
          <p style={{ gridColumn: '1/-1', textAlign: 'center', color: 'var(--text-dim)', padding: '60px 0' }}>
            Core team members for this session haven't been added to the registry yet.
          </p>
        )}
      </div>

      <style>{`
        .batch-header-modern h2 { text-transform: uppercase; letter-spacing: 1px; }
      `}</style>
    </div>
  );
};

export default BatchSection;

