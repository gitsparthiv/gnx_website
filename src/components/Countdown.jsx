import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="cd-wrapper">
      <div className="cd-title">Something big is coming</div>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="countdown-box">
            <AnimatePresence mode="wait">
              <motion.div
                key={value}
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -5, opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{ fontSize: '28px', fontWeight: '500', color: 'var(--primary)', fontFamily: 'monospace', lineHeight: 1, marginBottom: '8px' }}
              >
                {value.toString().padStart(2, '0')}
              </motion.div>
            </AnimatePresence>
            <div style={{ fontSize: '9px', color: 'rgba(255, 255, 255, 0.3)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              {unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
