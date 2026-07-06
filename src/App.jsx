import React, { useState, useEffect, useCallback } from 'react';
import { Flower2 } from 'lucide-react';
import { DAYS, DEFAULT_TIMETABLE, PERIOD_TIMES } from './data';
import DayCard from './components/DayCard';
import Legend from './components/Legend';
import CinematicThemeToggle from './components/CinematicThemeToggle';

function App() {
  const [theme, setTheme] = useState('dark');
  const timetable = DEFAULT_TIMETABLE;
  const [activeSubject, setActiveSubject] = useState(null);
  const [currentPeriodIdx, setCurrentPeriodIdx] = useState(-1);
  const [todayName, setTodayName] = useState('');
  
  // Update live clock and current period
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const dayNamesFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      setTodayName(dayNamesFull[now.getDay()]);

      const mins = now.getHours() * 60 + now.getMinutes();
      let pIdx = -1;
      for (let i = PERIOD_TIMES.length - 1; i >= 0; i--) {
        const start = PERIOD_TIMES[i][0] * 60 + PERIOD_TIMES[i][1];
        if (mins >= start && mins < start + 45) {
          pIdx = i;
          break;
        }
      }
      setCurrentPeriodIdx(pIdx);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Sync theme with HTML attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // Update meta theme-color for mobile browser chrome
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#0F0B15' : '#F8F4FC');
    }
  }, [theme]);

  // Sync Day Theme
  useEffect(() => {
    const dayTheme = DAYS.includes(todayName) ? todayName : 'Monday';
    document.documentElement.setAttribute('data-day-theme', dayTheme);
  }, [todayName]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  const isWeekend = todayName === 'Sunday' || todayName === 'Saturday';
  const dateStr = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <>
      {/* Ambient background with floating orbs */}
      <div className="app-bg" aria-hidden="true" />

      {/* Cinematic Theme Toggle */}
      <CinematicThemeToggle theme={theme} onToggle={toggleTheme} />

      <div className="page">
        <header className="hero">
          <p className="eyebrow">Weekly Timetable</p>
          <h1 className="title">10B</h1>
          <p className="date-line">
            {isWeekend ? `${dateStr} · enjoy the weekend ✿` : dateStr}
          </p>
          <p className="tagline">Your week, one card at a time.</p>
        </header>

        <div className="vine-wrap" aria-hidden="true">
          <svg viewBox="0 0 200 50" aria-hidden="true">
            <path d="M6,8 C50,0 150,0 194,10" strokeWidth="1.5" fill="none" opacity="0.7"/>
            <ellipse cx="34" cy="20" rx="4" ry="6" fill="#8B6FB3" opacity="0.75" transform="rotate(-12 34 20)"/>
            <ellipse cx="58" cy="28" rx="3.5" ry="5.5" fill="#C15C86" opacity="0.7" transform="rotate(8 58 28)"/>
            <ellipse cx="84" cy="18" rx="4" ry="6" fill="#8B6FB3" opacity="0.8" transform="rotate(-6 84 18)"/>
            <ellipse cx="108" cy="30" rx="3.5" ry="5.5" fill="#C15C86" opacity="0.65" transform="rotate(10 108 30)"/>
            <ellipse cx="134" cy="20" rx="4" ry="6" fill="#8B6FB3" opacity="0.75" transform="rotate(-10 134 20)"/>
            <ellipse cx="160" cy="26" rx="3.5" ry="5.5" fill="#C15C86" opacity="0.7" transform="rotate(6 160 26)"/>
          </svg>
        </div>

        <Legend activeSubject={activeSubject} setActiveSubject={setActiveSubject} />

        <main className="days-grid">
          {DAYS.map((day, idx) => (
            <DayCard 
              key={day}
              day={day}
              periods={timetable[day]}
              isToday={day === todayName}
              currentPeriodIndex={currentPeriodIdx}
              hoveredSubject={activeSubject}
              style={{ animationDelay: `${(idx * 0.08).toFixed(2)}s` }}
            />
          ))}
        </main>

        <footer className="foot">
          Made for Class 10B — have a good week 
          <span className="foot-icon"><Flower2 size={13}/></span>
        </footer>
      </div>
    </>
  );
}

export default App;
