import React from 'react';
import LanguageSelector from './LanguageSelector';

const Navbar = ({ language, setLanguage, setCurrentPage, translations }) => {
  return (
    <nav className="navbar">
      <h1 onClick={() => setCurrentPage('home')} className="navbar-title">{translations[language].welcome}</h1>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <ul className="navbar-menu">
        <li onClick={() => setCurrentPage('home')}>{translations[language].welcome}</li>
        <li onClick={() => setCurrentPage('courses')}>{translations[language].courses}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
