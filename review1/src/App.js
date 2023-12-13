// App.js
import React from 'react';
import LoginForm from './Component/LoginForm';
import SignupForm from './Component/SignupForm';
import './App.css'; // Import the CSS file

const App = () => {
  const handleLogin = (data) => {
    // Handle login logic, e.g., send data to a server
    console.log('Login:', data);
  };

  const handleSignup = (data) => {
    // Handle signup logic, e.g., send data to a server
    console.log('Signup:', data);
  };

  return (
    <div className="Parent">
    <div>
      <h1>DineOn</h1>
      <LoginForm onLogin={handleLogin} />

      {/* <h2>Signup</h2>
      <SignupForm onSignup={handleSignup} /> */}
    </div>
    </div>
  );
};

export default App;
