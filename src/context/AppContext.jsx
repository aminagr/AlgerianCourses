import React, { createContext, useContext, useState } from 'react';
import translations from '../data/translations'; // Adjust the path to where your translations file is located

// Create the AppContext
const AppContext = createContext();

// Define the AppProvider component
export const AppProvider = ({ children }) => {
  // State variables
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
      translations, // Include translations in context
    }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => useContext(AppContext);
