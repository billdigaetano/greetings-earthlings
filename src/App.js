// App.js with circular logo, personalization tagline, and custom-shaped star elements

import React, { useEffect } from 'react';
import './App.css';
import alienLogo from './assets/alien-logo.png';
import circleLogo from './assets/logo-transparent.png';

// ✨ Custom static star shapes
const starElements = [
  <div className="text-star" style={{ top: '5%', left: '10%' }}>✦</div>,
  <div className="text-star" style={{ top: '12%', left: '80%' }}>✧</div>,
  <div className="text-star" style={{ top: '30%', left: '20%' }}>✨</div>,
  <div className="text-star" style={{ top: '60%', left: '70%' }}>✧</div>,
  <div className="text-star" style={{ top: '80%', left: '15%' }}>✦</div>
];

function App() {
  useEffect(() => {
    const starField = document.querySelector('.star-field');
    if (!starField) return;

    starField.innerHTML = ''; // clear any old stars
    for (let i = 0; i < 20; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 200}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      starField.appendChild(star);
    }
  }, []);

  return (
    <div className="app-container">
      <div className="star-field"></div>
      <div className="star-field-text">
        {starElements}
      </div>

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
        <h1 className="headline">A card concierge for the forgetful, the thoughtful, and everyone in between!</h1>
        <p className="subheadline">We're not replacing personalization, we're making it easier to be personal.</p>
        <button className="cta-button">Start Here</button>
      </main>

      <footer className="footer">
        <p>© 2025 Greetings Earthlings. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
