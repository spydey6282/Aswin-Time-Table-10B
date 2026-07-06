import React from 'react';
import { SUBJECTS } from '../data';

export default function PeriodRow({ subjectCode, periodIndex, isHighlighted, isNow }) {
  const subject = SUBJECTS[subjectCode];
  if (!subject) return null;

  const practicalClass = subject.practical ? ' is-practical' : '';
  const highlightClass = isHighlighted ? ' is-highlighted' : '';
  const nowClass = isNow ? ' is-now' : '';

  return (
    <div 
      className={`period-row${practicalClass}${nowClass}${highlightClass}`} 
      style={{ '--subject-color': subject.color }}
    >
      <span className="period-num">{periodIndex + 1}</span>
      <span className="subject-name">{subject.name}</span>
      <span className="subject-tag">{subject.tag}</span>
    </div>
  );
}
