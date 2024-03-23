import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Send only email and password
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Login successful:', data);
        // Redirect to dashboard page
        window.location.href = '/dashboard';
      } else {
        console.error('Login failed:', data.message);
        // Handle login failure (display error message, etc.)
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error (display error message, etc.)
    }
  };

  return (
    <div>
      <h2>Welcome to the Budget App</h2>
      <p>Please sign up or log in to continue.</p>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
    </div>
  );
};

export default HomePage;
