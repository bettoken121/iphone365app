import React from 'react';  // Importazione di React necessaria per JSX
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Se hai uno stile personalizzato
import App from './App.jsx';  // Assicurati che il percorso sia corretto

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
