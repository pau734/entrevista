// src/App.tsx
import React from 'react';
import './App.css';
import {
  AppBar, Toolbar, Typography, Container,
} from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Marketplace from './pages/Marketplace/Marketplace';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static" className="Navbar" style={{ backgroundColor: '#0a1929' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
              Futurama Marketplace
            </Typography>
          </Toolbar>
        </AppBar>

        <header className="App-header">
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/characters" element={<Marketplace />} />
            </Routes>
          </Container>
        </header>
      </div>
    </Router>
  );
}

export default App;
