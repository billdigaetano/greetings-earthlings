import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PasswordGate from './PasswordGate'; // 👈 Make sure this matches your filename

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PasswordGate>
      <App />
    </PasswordGate>
  </React.StrictMode>
);


