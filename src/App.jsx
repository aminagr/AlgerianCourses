import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CourseCard from './components/CourseCard';
import LessonCard from './components/LessonCard';
import Home from './components/Home';
import Footer from './components/Footer';
import lessonsData from './data/lessons.json';
import translations from './data/translations';
import './styles.css';

const App = () => {
  const [language, setLanguage] = useState('en');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setCurrentLessonIndex(0);
    setCurrentPage('course');
  };

  const handleNext = () => {
    setCurrentLessonIndex((prevIndex) => Math.min(prevIndex + 1, lessonsData.courses[selectedCourse].lessons.length - 1));
  };

  const handlePrev = () => {
    setCurrentLessonIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleClose = () => {
    setSelectedCourse(null);
    setCurrentLessonIndex(0);
    setCurrentPage('courses');
  };

  const renderCourseCards = () => {
    return Object.keys(lessonsData.courses).map((course, index) => (
      <CourseCard
        key={index}
        title={lessonsData.courses[course].title[language]}
        onClick={() => handleCourseClick(course)}
      />
    ));
  };
  
  const renderContent = () => {
    if (currentPage === 'home') {
      return <Home message={translations[language].welcome} />;
    } else if (currentPage === 'course') {
      if (!selectedCourse) return null;
      
      const lesson = lessonsData.courses[selectedCourse].lessons[currentLessonIndex];
      const totalLessons = lessonsData.courses[selectedCourse].lessons.length;

      return (
        <LessonCard
          lesson={lesson}
          courseTitle={lessonsData.courses[selectedCourse].title[language]} // Pass course title here
          language={language}
          onNext={handleNext}
          onPrev={handlePrev}
          onClose={handleClose}
          translations={translations[language].lesson}
          currentLessonIndex={currentLessonIndex}
          totalLessons={totalLessons}
        />
      );
    } else if (currentPage === 'courses') {
      return (
        <div className="courses">
          {renderCourseCards()}
        </div>
      );
    }
  };
  
  return (
    <div className="app">
      <Navbar language={language} setLanguage={setLanguage} setCurrentPage={setCurrentPage} translations={translations} />
      <div className="content">
        {renderContent()}
      </div>
      <Footer footerText={translations[language].footer} />
    </div>
  );
};

export default App;
