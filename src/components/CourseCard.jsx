import React from 'react';

const CourseCard = ({ title, onClick }) => {
  return (
    <div className="course-card" onClick={onClick}>
      <h2>{title}</h2>
    </div>
  );
};

export default CourseCard;
