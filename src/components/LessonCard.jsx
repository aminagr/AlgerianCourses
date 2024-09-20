import React from 'react';

const LessonCard = ({ lesson, onNext, onPrev, onClose, language, translations, currentLessonIndex, totalLessons }) => {
  return (
    <div className="lesson-card">
      <button className="close-button" onClick={onClose}>
        {translations.close}
      </button>
      <h3>{lesson.word.algerian}</h3>
      <p>{lesson.word[language === 'fr' ? 'french' : 'english']}</p>
      <div className="button-container">
        <button onClick={onPrev} disabled={currentLessonIndex === 0}>{translations.previous}</button>
        <button onClick={onNext} disabled={currentLessonIndex === totalLessons - 1}>{translations.next}</button>
      </div>
    </div>
  );
};

export default LessonCard;
