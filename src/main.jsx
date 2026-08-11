import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

function hideBoot() {
  const bootScreen = document.getElementById('boot-screen');
  if (!bootScreen || bootScreen.classList.contains('is-hidden')) return;
  bootScreen.classList.add('is-hidden');
  window.setTimeout(() => bootScreen.remove(), 400);
}

// Hide as soon as React paints
requestAnimationFrame(hideBoot);

// Fallback: hide after 2.5s max no matter what
window.setTimeout(hideBoot, 2500);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
