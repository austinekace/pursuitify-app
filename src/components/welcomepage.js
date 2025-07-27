import React, { useState, useEffect } from 'react';
import './welcomepage.css';

const WelcomePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toUTCString());
  const [isLogin, setIsLogin] = useState(true);

  // Form state
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toUTCString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Validation helpers
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateLogin = () => {
    let errs = {};
    if (!validateEmail(loginData.email)) errs.email = 'Invalid email address';
    if (!loginData.password) errs.password = 'Password is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateSignup = () => {
    let errs = {};
    if (!signupData.name.trim()) errs.name = 'Name is required';
    if (!validateEmail(signupData.email)) errs.email = 'Invalid email address';
    if (!signupData.password || signupData.password.length < 6)
      errs.password = 'Password must be at least 6 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Handlers
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      // Handle login logic here (API call, etc)
      alert('Login successful!');
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (validateSignup()) {
      // Handle signup logic here (API call, etc)
      alert('Sign up successful!');
    }
  };

  return (
    <div className="welcome-page-container">
      <div className="galaxy-background">
        <div className="sun"></div>
        <div className="earth-orbit">
          <div className="earth"></div>
        </div>
        <div className="planet mars"></div>
        <div className="planet jupiter"></div>
        <div className="planet saturn"></div>
      </div>
      <div className="clock-container">
        <p className="clock-text">{currentTime}</p>
      </div>
      <div className="auth-container">
        <div className="auth-toggle">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => {
              setIsLogin(true);
              setErrors({});
            }}
          >
            Login
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => {
              setIsLogin(false);
              setErrors({});
            }}
          >
            Sign Up
          </button>
        </div>
        {isLogin ? (
          <form className="auth-form" onSubmit={handleLoginSubmit} autoComplete="off">
            <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={e => setLoginData({ ...loginData, email: e.target.value })}
              required
            />
            {errors.email && <div className="error-msg">{errors.email}</div>}
            <div className="password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={loginData.password}
                onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                required
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={0}
                role="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  // Eye open SVG
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="#2196f3" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="3.5" stroke="#2196f3" strokeWidth="2"/>
                  </svg>
                ) : (
                  // Eye closed SVG
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M17.94 17.94C16.11 19.25 14.13 20 12 20c-7 0-11-8-11-8a21.77 21.77 0 0 1 5.06-6.06M9.53 9.53A3.5 3.5 0 0 1 12 8.5c1.93 0 3.5 1.57 3.5 3.5 0 .47-.09.92-.26 1.33M1 1l22 22" stroke="#2196f3" strokeWidth="2"/>
                  </svg>
                )}
              </span>
            </div>
            {errors.password && <div className="error-msg">{errors.password}</div>}
            <button type="submit">Login</button>
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleSignupSubmit} autoComplete="off">
            <h2>Sign Up</h2>
            <input
              type="text"
              placeholder="Full Name"
              value={signupData.name}
              onChange={e => setSignupData({ ...signupData, name: e.target.value })}
              required
            />
            {errors.name && <div className="error-msg">{errors.name}</div>}
            <input
              type="email"
              placeholder="Email"
              value={signupData.email}
              onChange={e => setSignupData({ ...signupData, email: e.target.value })}
              required
            />
            {errors.email && <div className="error-msg">{errors.email}</div>}
            <div className="password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={signupData.password}
                onChange={e => setSignupData({ ...signupData, password: e.target.value })}
                required
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={0}
                role="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="#2196f3" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="3.5" stroke="#2196f3" strokeWidth="2"/>
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M17.94 17.94C16.11 19.25 14.13 20 12 20c-7 0-11-8-11-8a21.77 21.77 0 0 1 5.06-6.06M9.53 9.53A3.5 3.5 0 0 1 12 8.5c1.93 0 3.5 1.57 3.5 3.5 0 .47-.09.92-.26 1.33M1 1l22 22" stroke="#2196f3" strokeWidth="2"/>
                  </svg>
                )}
              </span>
            </div>
            {errors.password && <div className="error-msg">{errors.password}</div>}
            <button type="submit">Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;