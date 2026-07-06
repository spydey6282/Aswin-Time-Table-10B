import React from 'react';
import PeriodRow from './PeriodRow';
import { Flower2 } from 'lucide-react';

export default function DayCard({ day, periods, isToday, currentPeriodIndex, hoveredSubject, style }) {
  const isEmpty = !periods || periods.length === 0;

  return (
    <article 
      className={`day-card${isToday ? ' is-today' : ''}`} 
      style={style}
      data-day={day}
    >
      <h2 className="day-name">
        <span className="bud"><Flower2 size={18} strokeWidth={2.5}/></span>{day}
      </h2>
      
      {isEmpty ? (
        <div className="empty-day">
          <span className="empty-day-icon">☀️</span>
          <span className="empty-day-text">No classes — enjoy the day!</span>
        </div>
      ) : (
        periods.map((code, i) => (
          <PeriodRow 
            key={`${code}-${i}`} 
            subjectCode={code} 
            periodIndex={i}
            isNow={isToday && currentPeriodIndex === i}
            isHighlighted={hoveredSubject === code}
          />
        ))
      )}
      
      {isToday && (
        <span className="today-ribbon">
          <Flower2 size={11} strokeWidth={3}/>
          Today
        </span>
      )}
    </article>
  );
}
