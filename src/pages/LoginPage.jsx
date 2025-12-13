import React, { useState } from 'react';
import { login } from '../utils/authUtils';
import { useAuth } from '../context/AuthContext';
import '../styles/AuthPages.css';

const LoginPage = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { updateUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const result = login(email, password);
      if (result.success) {
        updateUser(result.user);
        alert('Login successful!');
        onNavigate('courses');
      } else {
        setError(result.error);
      }
      setLoading(false);
    }, 500);
  };

  const handleDemoLogin = () => {
    const result = login('demo@example.com', 'demo123');
    if (result.success) {
      updateUser(result.user);
      alert('Demo login successful!');
      onNavigate('courses');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h2>Login to Your Account</h2>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="demo-section">
            <p>Want to try it out?</p>
            <button className="demo-btn" onClick={handleDemoLogin}>
              Login with Demo Account
            </button>
            <p className="demo-credentials">
              Demo: demo@example.com / demo123
            </p>
          </div>

          <div className="auth-footer">
            <p>Don't have an account? 
              <button 
                className="link-btn" 
                onClick={() => onNavigate('signup')}
              >
                Sign up here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
