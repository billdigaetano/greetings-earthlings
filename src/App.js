// App.js with circular logo added above headline

import React from 'react';
import './App.css';
import alienLogo from './assets/alien-logo.png';
import circleLogo from './assets/logo-transparent.png';

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
        <img src={circleLogo} alt="Circle Greetings Earthlings Logo" className="circle-logo" />
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
