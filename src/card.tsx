// src/components/Card.tsx
import React from 'react';
import useStyles from './styles'; // Importar useStyles desde styles.ts

interface CardProps {
  character: {
    id: number;
    name: {
      first: string;
      middle: string;
      last: string;
    };
    images: {
      'head-shot': string;
      main: string;
    };
  };
  onClick: () => void;
}

function Card({ character, onClick }: CardProps): React.JSX.Element {
  const classes = useStyles(); // Usar useStyles para obtener las clases

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }} // Manejador de teclado para accesibilidad
    >
      {/* Aplicar la clase 'cardImage' a la imagen */}
      <img
        src={character.images.main}
        alt={`${character.name.first} ${character.name.last}`}
        className={classes.cardImage} // Aplicar la clase cardImage aquí
      />
      {/* Concatenamos las propiedades del nombre */}
      <h3>{`${character.name.first} ${character.name.middle} ${character.name.last}`}</h3>
    </div>
  );
}

export default Card;
