import React from 'react';

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <select className="language-selector" value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="fr">Français</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSelector;
