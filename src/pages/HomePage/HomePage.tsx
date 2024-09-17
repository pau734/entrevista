// src/pages/HomePage/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage(): React.JSX.Element {
  const navigate = useNavigate();

  const navigateToCharacters = () => {
    navigate('/characters');
  };

  return (
    <div className="home-page">
      <h1>Futurama Characters</h1>
      <button type="button" onClick={navigateToCharacters} className="home-page-button">
        Click here to see the list
      </button>
    </div>
  );
}

export default HomePage;
