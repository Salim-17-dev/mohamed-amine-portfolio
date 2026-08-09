import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

requestAnimationFrame(() => {
  const bootScreen = document.getElementById('boot-screen');
  if (!bootScreen) return;

  bootScreen.classList.add('is-hidden');
  window.setTimeout(() => bootScreen.remove(), 400);
});
