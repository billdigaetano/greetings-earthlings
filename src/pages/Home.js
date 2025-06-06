import React from 'react';
import '../App.css';
import logo from '../assets/alien-logo.png';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src={logo} alt="Greetings Earthlings Logo" style={{ height: '60px' }} />
        <nav>
          <a href="/" style={{ margin: '0 10px' }}>Home</a>
          <a href="/about" style={{ margin: '0 10px' }}>About</a>
          <a href="/cards" style={{ margin: '0 10px' }}>Cards</a>
        </nav>
      </header>
      <main style={{ marginTop: '4rem' }}>
        <h1>Never forget a card again.</h1>
        <p>We handle the hassle so you can send the love.</p>
        <button className="cta">Start Here</button>
      </main>
      <footer style={{ marginTop: '4rem' }}>
        <p>© Greetings Earthlings</p>
      </footer>
    </div>
  );
}

export default Home;
