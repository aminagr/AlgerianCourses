import React from 'react';

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <select className="language-selector" value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="en">🇬🇧 English</option>
      <option value="fr">🇫🇷 Français</option>
      <option value="es">🇪🇸 Español</option>
      <option value="it">🇮🇹 Italiano</option>
      <option value="ru">🇷🇺 Русский</option>
      <option value="ar">🇸🇦 العربية</option>
    </select>
  );
};

export default LanguageSelector;
