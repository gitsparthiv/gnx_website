import React, { useState, useEffect } from 'react';

/**
 * ChromaticLogo - Wraps any content (logo/svg) and applies a 
 * sharp RGB chromatic split glitch at random intervals.
 */
const ChromaticLogo = ({ children, className = "" }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    let timer;
    
    const scheduleGlitch = () => {
      // Random pause (2s - 6s)
      const nextDelay = 2000 + Math.random() * 4000;
      
      timer = setTimeout(() => {
        setIsGlitching(true);
        
        // Sudden duration (100ms - 300ms)
        const duration = 100 + Math.random() * 200;
        
        setTimeout(() => {
          setIsGlitching(false);
          scheduleGlitch();
        }, duration);
      }, nextDelay);
    };

    scheduleGlitch();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`chromatic-wrapper ${isGlitching ? 'active' : ''} ${className}`}>
      <div className="chromatic-layer layer-red">{children}</div>
      <div className="chromatic-layer layer-green">{children}</div>
      <div className="chromatic-layer layer-blue">{children}</div>
      <div className="chromatic-main">{children}</div>

      <style>{`
        .chromatic-wrapper {
          position: relative;
          display: inline-block;
        }

        .chromatic-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0;
          mix-blend-mode: screen;
        }

        /* Channel Colors */
        .layer-red   { color: #ff0000; filter: drop-shadow(0 0 0 #ff0000); }
        .layer-green { color: #00ff00; filter: drop-shadow(0 0 0 #00ff00); }
        .layer-blue  { color: #0000ff; filter: drop-shadow(0 0 0 #0000ff); }

        /* Only show and animate layers during active glitch state */
        .chromatic-wrapper.active .chromatic-layer {
          opacity: 1;
        }

        .chromatic-wrapper.active .layer-red {
          animation: split-red 0.15s infinite steps(1);
        }
        .chromatic-wrapper.active .layer-green {
          animation: split-green 0.15s infinite steps(1);
        }
        .chromatic-wrapper.active .layer-blue {
          animation: split-blue 0.15s infinite steps(1);
        }

        @keyframes split-red {
          0%   { transform: translate(3px, 2px); }
          50%  { transform: translate(-2px, -1px); }
          100% { transform: translate(1px, 3px); }
        }

        @keyframes split-green {
          0%   { transform: translate(-3px, -2px); }
          50%  { transform: translate(2px, 1px); }
          100% { transform: translate(-1px, -3px); }
        }

        @keyframes split-blue {
          0%   { transform: translate(0px, 0px); opacity: 0.5; }
          50%  { transform: translate(3px, -1px); opacity: 0.8; }
          100% { transform: translate(-2px, 2px); opacity: 0.4; }
        }

        /* Dim the main logo slightly during the burst for better blend visibility */
        .chromatic-wrapper.active .chromatic-main {
          opacity: 0.8;
          filter: grayscale(0.5);
        }
      `}</style>
    </div>
  );
};

export default ChromaticLogo;
