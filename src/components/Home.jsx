import React from 'react';

const Home = ({ message }) => {
  return (
    <div className="home">
      <h2>{message}</h2>
      <p>Explorez les leçons disponibles pour améliorer vos compétences linguistiques.</p>
    </div>
  );
};

export default Home;
