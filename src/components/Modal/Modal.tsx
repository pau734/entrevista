// src/components/Modal.tsx
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from '@mui/material';
import './Modal.css';

interface ModalProps {
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
    description: string;
    species: string;
    gender: string;
    homePlanet: string;
    occupation: string;
  };
  onClose: () => void;
}

function Modal({ character, onClose }: ModalProps): React.JSX.Element {
  return (
    <Dialog
      open
      onClose={onClose}
      maxWidth="md"
      fullWidth
      classes={{ paper: 'dialogPaper' }}
    >
      <Box className="characterName">
        {`${character.name.first} ${character.name.middle} ${character.name.last}`}
      </Box>

      <DialogContent>
        <Box className="centeredContainer">
          <img
            src={character.images.main}
            alt={`${character.name.first} ${character.name.last}`}
            className="cardImage"
          />
          <p>{character.description}</p>
          <Box className="centeredText">
            <p>
              <strong>Species:</strong>
              <br />
              {character.species}
            </p>
            <p>
              <strong>Gender:</strong>
              <br />
              {character.gender}
            </p>
            <p>
              <strong>Home Planet:</strong>
              <br />
              {character.homePlanet}
            </p>
            <p>
              <strong>Occupation:</strong>
              <br />
              {character.occupation}
            </p>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} className="closeButton">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
