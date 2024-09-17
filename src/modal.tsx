// src/components/Modal.tsx
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from '@mui/material';
import useStyles from './styles'; // Importar estilos personalizados

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
  const classes = useStyles();

  return (
    <Dialog
      open
      onClose={onClose}
      maxWidth="md"
      fullWidth
      classes={{ paper: classes.dialogPaper }}
    >
      <DialogTitle>
        {`${character.name.first} ${character.name.middle} ${character.name.last}`}
      </DialogTitle>

      <DialogContent>
        <Box className={classes.centeredContainer}>
          <img
            src={character.images.main}
            alt={`${character.name.first} ${character.name.last}`}
            className={classes.cardImage}
          />
          <p>{character.description}</p>
          <Box className={classes.centeredText}>
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
        <Button onClick={onClose} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
