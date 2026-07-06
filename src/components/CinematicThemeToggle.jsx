import React, { useState, useCallback, useRef, useEffect } from 'react';

/*
  CinematicThemeToggle — A premium animated theme switch
  featuring a scenic sky with sun, moon, stars, and clouds.
  The transition tells a visual story: sunrise ↔ sunset.
*/

export default function CinematicThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  const [isAnimating, setIsAnimating] = useState(false);
  const buttonRef = useRef(null);

  const handleClick = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    onToggle();
    // Allow CSS transitions to complete
    setTimeout(() => setIsAnimating(false), 1200);
  }, [isAnimating, onToggle]);

  // Keyboard support
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  return (
    <button
      ref={buttonRef}
      className={`cinematic-toggle ${isDark ? 'is-night' : 'is-day'} ${isAnimating ? 'is-animating' : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      role="switch"
      type="button"
    >
      {/* Sky gradient background */}
      <div className="sky-track" aria-hidden="true">
        {/* Sky layers for cinematic gradient */}
        <div className="sky-layer sky-day" />
        <div className="sky-layer sky-sunset" />
        <div className="sky-layer sky-night" />

        {/* Stars */}
        <div className="stars-container">
          <span className="star" style={{ top: '18%', left: '12%', animationDelay: '0s' }} />
          <span className="star" style={{ top: '28%', left: '32%', animationDelay: '0.7s' }} />
          <span className="star" style={{ top: '14%', left: '55%', animationDelay: '1.3s' }} />
          <span className="star" style={{ top: '38%', left: '72%', animationDelay: '0.4s' }} />
          <span className="star" style={{ top: '22%', left: '88%', animationDelay: '1s' }} />
          <span className="star" style={{ top: '42%', left: '20%', animationDelay: '1.6s' }} />
          <span className="star star-lg" style={{ top: '10%', left: '42%', animationDelay: '0.2s' }} />
          <span className="star star-lg" style={{ top: '35%', left: '65%', animationDelay: '0.9s' }} />
        </div>

        {/* Clouds */}
        <div className="clouds-container">
          <span className="cloud cloud-1" />
          <span className="cloud cloud-2" />
          <span className="cloud cloud-3" />
        </div>

        {/* Celestial body — the thumb that slides */}
        <div className="celestial-thumb">
          {/* Sun */}
          <div className="sun-body">
            <div className="sun-core" />
            <div className="sun-glow" />
            {/* Sun rays */}
            <div className="sun-rays">
              {[...Array(8)].map((_, i) => (
                <span key={i} className="sun-ray" style={{ transform: `rotate(${i * 45}deg)` }} />
              ))}
            </div>
          </div>

          {/* Moon */}
          <div className="moon-body">
            <div className="moon-core" />
            <div className="moon-glow" />
            {/* Moon craters */}
            <span className="crater crater-1" />
            <span className="crater crater-2" />
            <span className="crater crater-3" />
          </div>
        </div>
      </div>

      {/* Label */}
      <span className="toggle-mode-label">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}
