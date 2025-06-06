// App.js with WOW homepage updates
import React from 'react';
import './App.css';
import alienLogo from './assets/alien-logo.png';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <img src={alienLogo} alt="Greetings Earthlings Logo" className="logo" />
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Cards</a>
        </nav>
      </header>
      <main className="main-content">
        <h1 className="headline">Greetings, Earthlings.</h1>
        <p className="subheadline">Never forget a card again.</p>
        <button className="cta-button">Start Here</button>
      </main>
      <footer className="footer">
        <p>© 2025 Greetings Earthlings. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

