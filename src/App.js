// App.js with router-enabled nav and working About route
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import alienLogo from './assets/alien-logo.png';
import circleLogo from './assets/logo-transparent.png';
import About from './pages/About'; // ✅ Correct path

// ✨ 10 Custom static star shapes
const starElements = [
  <div className="text-star" style={{ top: '5%', left: '10%' }}>✦</div>,
  <div className="text-star" style={{ top: '12%', left: '80%' }}>✧</div>,
  <div className="text-star" style={{ top: '30%', left: '20%' }}>✨</div>,
  <div className="text-star" style={{ top: '60%', left: '70%' }}>✧</div>,
  <div className="text-star" style={{ top: '80%', left: '15%' }}>✦</div>,
  <div className="text-star" style={{ top: '8%', left: '50%' }}>✨</div>,
  <div className="text-star" style={{ top: '25%', left: '75%' }}>✧</div>,
  <div className="text-star" style={{ top: '55%', left: '35%' }}>✦</div>,
  <div className="text-star" style={{ top: '70%', left: '5%' }}>✨</div>,
  <div className="text-star" style={{ top: '90%', left: '90%' }}>✧</div>
];

function App() {
  return (
    <Router>
      {/* ⭐ Stars placed outside layout to avoid pushing navbar down */}
      <div className="star-overlay">
        {starElements}
      </div>

      <div className="app-container">
        <header className="header">
          <img src={alienLogo} alt="Greetings Earthlings Logo" className="logo" />
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/cards">Cards</Link>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <main className="main-content">
                <img src={circleLogo} alt="Circle Greetings Earthlings Logo" className="circle-logo" />
                <h1 className="headline">A card concierge for the forgetful, the thoughtful, and everyone in between!</h1>
                <p className="subheadline">We're not replacing personalization, we're making it easier to be personal.</p>
                <button className="cta-button">Start Here</button>
              </main>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>

        <footer className="footer">
          <p>© 2025 Greetings Earthlings. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
