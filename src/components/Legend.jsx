import React from 'react';
import { SUBJECTS } from '../data';

export default function Legend({ activeSubject, setActiveSubject }) {
  // Deduplicate subjects (IT and IT(P) share the same name display)
  const legendItems = Object.values(SUBJECTS).reduce((acc, current) => {
    if (!acc.find(item => item.name === current.name)) {
      acc.push(current);
    }
    return acc;
  }, []);

  return (
    <section className="legend-section" aria-label="Subject legend">
      <p className="legend-label">Subjects</p>
      <div className="legend" role="list">
        {legendItems.map((item) => (
          <span 
            key={item.tag}
            role="listitem"
            className={`legend-item${activeSubject === item.tag ? ' is-active' : ''}`}
            onMouseEnter={() => setActiveSubject(item.tag)}
            onMouseLeave={() => setActiveSubject(null)}
            onTouchStart={() => setActiveSubject(prev => prev === item.tag ? null : item.tag)}
          >
            <span 
              className="legend-dot" 
              style={{ background: item.color }}
              aria-hidden="true"
            />
            {item.name}
          </span>
        ))}
      </div>
    </section>
  );
}
