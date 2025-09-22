import React, { useState } from 'react';
import './Login.css';

interface LoginProps {
  onLogin: (success: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Hardcoded credentials
  const VALID_CREDENTIALS = {
    username: 'admin',
    password: 'password123'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate loading time
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
      onLogin(true);
    } else {
      setError('Invalid username or password');
      onLogin(false);
    }

    setIsLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
      </div>
      
      <form className="login-form" onSubmit={handleSubmit}>
        {/* Left side - Welcome content */}
        <div className="login-welcome">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Please sign in to your account to continue</p>
          
          <div className="login-demo">
            <p>Demo credentials:</p>
            <p><strong>Username:</strong> admin</p>
            <p><strong>Password:</strong> password123</p>
          </div>
        </div>

        {/* Right side - Form inputs */}
        <div className="login-inputs">
          {error && <div className="error-message">{error}</div>}
          
          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="input-field"
                placeholder=" "
              />
              <label htmlFor="username" className="input-label">Username</label>
              <div className="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
                placeholder=" "
              />
              <label htmlFor="password" className="input-label">Password</label>
              <div className="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <circle cx="12" cy="16" r="1"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="login-options">
            <label className="checkbox-wrapper">
              <input type="checkbox" />
              <span className="checkbox-checkmark"></span>
              Remember me
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="spinner"></div>
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;