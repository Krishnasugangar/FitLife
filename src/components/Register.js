import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      register(email, password);
      setSuccess('Registration successful! You can login now.');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      // Optionally redirect to login automatically
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 360, margin: 'auto', marginTop: 64, padding: 20, border: '1px solid #ccc', borderRadius: 8, boxShadow: '0 0 10px #ccc' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Register</h2>
      {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
      {success && <div style={{ color: 'green', marginBottom: 12 }}>{success}</div>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
            placeholder="Enter your email"
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
            placeholder="Enter password"
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Confirm Password</label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
            placeholder="Confirm password"
          />
        </div>
        <button
          type="submit"
          style={{ width: '100%', padding: 10, backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: 4 }}
        >
          Register
        </button>
      </form>
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <span>Already have an account? </span>
        <Link to="/login" style={{ color: '#007bff', textDecoration: 'none' }}>Login here</Link>
      </div>
    </div>
  );
};

export default Register;
