// src/marketplace.tsx
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from './card';
import Modal from './modal';
import './styles';

interface Character {
  id: number; // Asumiendo que hay un ID único para cada personaje
  name: {
    first: string;
    middle: string;
    last: string;
  };
  images: {
    'head-shot': string;
    main: string;
  };
  description: string;
  species: string;
  gender: string;
  homePlanet: string;
  occupation: string;
}

function Marketplace(): React.JSX.Element {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.sampleapis.com/futurama/characters'); // URL de la API
        if (!response.ok) {
          throw new Error('Error al obtener los datos.');
        }
        const data = await response.json();
        // Suponiendo que 'data' es un array de personajes
        setCharacters(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Render the component
  return (
    <div className="marketplace">
      <h1>Futurama Marketplace</h1>
      {isLoading && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      {/* Usar Grid como contenedor para las tarjetas */}
      <Grid container spacing={3} className="card-grid">
        {characters.map((character) => (
          // Cada tarjeta se convierte en un ítem de la cuadrícula
          <Grid item xs={12} sm={6} md={4} key={character.id}>
            <Card
              character={character}
              onClick={() => setSelectedCharacter(character)}
            />
          </Grid>
        ))}
      </Grid>

      {selectedCharacter && (
        <Modal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}

export default Marketplace;
