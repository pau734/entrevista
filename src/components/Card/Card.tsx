// src/components/Card.tsx
import React from 'react';
import useStyles from '../styles';

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
  const classes = useStyles();

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
      className={classes.cardContainer}
    >
      <img
        src={character.images.main}
        alt={`${character.name.first} ${character.name.last}`}
        className={classes.cardImage}
      />
      <h3>{`${character.name.first} ${character.name.middle} ${character.name.last}`}</h3>
    </div>
  );
}

export default Card;
