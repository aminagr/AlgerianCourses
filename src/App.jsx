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
  const [language, setLanguage] = useState('fr');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setCurrentLessonIndex(0);
    setCurrentPage('course');
  };

  const handleNext = () => {
    setCurrentLessonIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentLessonIndex((prevIndex) => prevIndex - 1);
  };

  const handleClose = () => {
    setSelectedCourse(null);
    setCurrentLessonIndex(0);
    setCurrentPage('home');
  };

  const renderCourseCards = () => {
    return Object.keys(lessonsData.lessons).map((course, index) => (
      <CourseCard
        key={index}
        title={translations[language][course]}
        onClick={() => handleCourseClick(course)}
      />
    ));
  };

  const renderContent = () => {
    if (currentPage === 'home') {
      return <Home message={translations[language].welcome} />;
    } else if (currentPage === 'course') {
      const lesson = lessonsData.lessons[selectedCourse][currentLessonIndex];
      const totalLessons = lessonsData.lessons[selectedCourse].length; // Get the total lessons
  
      return (
        <LessonCard
          lesson={lesson}
          language={language}
          onNext={handleNext}
          onPrev={handlePrev}
          onClose={handleClose}
          translations={translations[language].lesson}
          currentLessonIndex={currentLessonIndex} // Pass current lesson index
          totalLessons={totalLessons} // Pass total number of lessons
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
