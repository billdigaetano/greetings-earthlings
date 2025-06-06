
import React from "react";
import "../App.css";
import logo from "../assets/alien-logo.png";

function Home() {
  return (
    <div className="homepage">
      <header className="header">
        <img src={logo} alt="Greetings Earthlings Logo" className="logo" />
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/cards">Cards</a>
        </nav>
      </header>
      <main className="main-content">
        <h1>Never forget a card again.</h1>
        <p>We handle the hassle so you can send the love.</p>
        <button className="cta-button">Start Here</button>
        <p className="arrow-label">↑</p>
      </main>
      <footer className="footer">© Greetings Earthlings</footer>
    </div>
  );
}

export default Home;
