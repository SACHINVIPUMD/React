// SignupForm.js
import React, { useState } from 'react';
const SignupForm = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup({ email, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
