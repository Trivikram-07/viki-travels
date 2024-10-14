import React, { useState } from 'react';
import './Login.css'; // Import external CSS for styling
import useDocumentTitle from './Tittle';
const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };
  
  useDocumentTitle('Login/SignUp');
  return (
    <div className="login-page">
      <button className="toggle-btn" onClick={handleToggle}>
        {isSignUp ? 'Login' : 'Sign Up'}
      </button>
      
      <div className="form-container">
        {isSignUp ? <SignUpForm /> : <LoginForm />}
      </div>
    </div>
  );
};

// Login Form Component
const LoginForm = () => (
  <div className="form">
    <h2>Login</h2>
    <form class="signup">
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
);

// Sign Up Form Component
const SignUpForm = () => (
  <div className="form">
    <h2>Sign Up</h2>
    <form class="signup">
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <input type="password" placeholder="Re-Type Password" required />
      <input type="number" placeholder="Number please" required />
      <button type="submit">Sign Up</button>
    </form>
  </div>
);

export default LoginPage;
