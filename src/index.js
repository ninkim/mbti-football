import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // ← 이 줄이 핵심!!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);