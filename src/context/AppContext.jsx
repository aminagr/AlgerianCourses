import React, { createContext, useContext, useState } from 'react';
import translations from '../data/translations';
import lessonsData from '../data/lessons.json'; // Import your lessons data

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      selectedCourse,
      setSelectedCourse,
      currentLessonIndex,
      setCurrentLessonIndex,
      currentPage,
      setCurrentPage,
      translations,
      courses: lessonsData.courses, // Provide courses here
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
