import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const { language, setLanguage, setCurrentPage, translations, courses, setSelectedCourse } = useAppContext();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleCourseClick = (course) => {
    setDropdownVisible(false);
    setCurrentPage('course');
    setSelectedCourse(course);
  };

  return (
    <nav className="navbar">
      <h1 onClick={() => setCurrentPage('home')} className="navbar-title">{translations[language].titre}</h1>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <ul className="navbar-menu">
        <li onClick={() => setCurrentPage('home')}>{translations[language].accueil}</li>
        <li 
          onMouseEnter={() => setDropdownVisible(true)} 
          onMouseLeave={() => setDropdownVisible(false)} 
          className="courses-dropdown"
        >
          {translations[language].courses}
          {dropdownVisible && (
            <ul className="dropdown-menu">
              {Object.keys(courses).map((courseKey, index) => (
                <li key={index} onClick={() => handleCourseClick(courseKey)}>
                  {courses[courseKey].title[language]}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
