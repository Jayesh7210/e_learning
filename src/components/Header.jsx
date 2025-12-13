import React from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Header.css';

const Header = ({ currentPage, onNavigate }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    onNavigate('courses');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <h1 className="logo" onClick={() => onNavigate('courses')} style={{ cursor: 'pointer' }}>
            📚 E-Learning Platform
          </h1>
        </div>

        <nav className="header-nav">
          <button
            className={`nav-btn ${currentPage === 'courses' ? 'active' : ''}`}
            onClick={() => onNavigate('courses')}
          >
            Courses
          </button>
          {user && (
            <button
              className={`nav-btn ${currentPage === 'my-courses' ? 'active' : ''}`}
              onClick={() => onNavigate('my-courses')}
            >
              My Learning
            </button>
          )}
        </nav>

        <div className="header-right">
          {user ? (
            <div className="user-section">
              <span className="user-name">👤 {user.name}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-section">
              <button
                className="login-btn"
                onClick={() => onNavigate('login')}
              >
                Login
              </button>
              <button
                className="signup-btn"
                onClick={() => onNavigate('signup')}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
