// src/App.tsx
import React from 'react';
import './App.css';
import {
  AppBar, Container,
} from '@mui/material';
import Marketplace from './marketplace';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <AppBar position="static" />

      {/* Contenido principal */}
      <header className="App-header">
        <Container>
          <Marketplace />
        </Container>
      </header>
    </div>
  );
}

export default App;
