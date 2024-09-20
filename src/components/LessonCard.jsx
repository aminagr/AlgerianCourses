import React from 'react';

const LessonCard = ({ lesson, onNext, onPrev, onClose, language, translations, currentLessonIndex, totalLessons }) => {
  return (
    <div className="lesson-card">
      <button className="close-button" onClick={onClose}>
        {translations.close}
      </button>
      <h3>{lesson.word.dz}</h3>
      <p>{lesson.word[language] || "Translation not available"}</p> {/* Affiche la traduction selon la langue sélectionnée */}
      <div className="button-container">
        <button onClick={onPrev} disabled={currentLessonIndex === 0}>{translations.previous}</button>
        <button onClick={onNext} disabled={currentLessonIndex === totalLessons - 1}>{translations.next}</button>
      </div>
    </div>
  );
};

export default LessonCard;
