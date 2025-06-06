// src/PasswordGate.js
import React, { useState } from 'react';

const PasswordGate = ({ children }) => {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const correctPassword = 'project0rbit'; // 🔒 Your chosen password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredPassword === correctPassword) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  if (authenticated) {
    return children;
  }

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#001F3F',
      color: '#9EFFA9',
      fontFamily: 'Quicksand, sans-serif'
    }}>
      <h2>Access Restricted</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter Password"
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '8px',
            border: 'none',
            marginRight: '10px'
          }}
        />
        <button type="submit" style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#9EFFA9',
          color: '#001F3F',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordGate;
