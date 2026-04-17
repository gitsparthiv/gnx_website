import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container" style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div 
          key={unit}
          whileHover={{ y: -5 }}
          className="countdown-box glass"
          style={{ 
            padding: '15px', 
            borderRadius: '15px', 
            minWidth: '80px',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)' }}>
            {value.toString().padStart(2, '0')}
          </div>
          <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6 }}>
            {unit}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Countdown;
