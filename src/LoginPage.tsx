import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';

interface LoginResponse {
  success: boolean;
  token?: string; // If the API returns a token on success
  message?: string; // Optional message from API
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsAnimating(true);

    try {
      const response = await axios.post<LoginResponse>('https://your-api-url.com/login', {
        email,
        password,
      });

      if (response.data.success) {
        console.log('Login successful!', response.data.token);
        navigate('/movies'); // Navigate to the MoviePage component
      } else {
        alert(response.data.message || 'Invalid login credentials');
        setIsAnimating(false);
      }
    } catch (error) {
      console.error('Login failed', error);
      alert('An error occurred during login.');
      setIsAnimating(false);
    }
  };

  return (
    <div className={`h-screen bg-cover bg-center ${isAnimating ? 'fade-out' : 'fade-in'}`} style={{ backgroundImage: "url('/images/authentication-bg.png')" }}>
      <div className="absolute inset-0 flex items-center justify-end pr-60 -mt-12 slide-in-right">
        <div className="glass p-8 rounded-3xl w-full max-w-md mx-4">
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <input
                className="w-full p-3 rounded-3xl border border-white/50 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                id="email"
                name="email"
                placeholder="Email or Username"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                className="w-full p-3 rounded-3xl border border-white/50 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button 
              className="w-full p-3 bg-white text-gray-900 rounded-3xl font-medium hover:bg-opacity-90 transition-all duration-300" 
              type="submit" 
              id='login-button'
            >
              Log in
            </button>
            <div className="text-center text-white">
              Don't have an account? <Link className="text-blue-300 hover:text-blue-200 underline" to="/create-account">Sign up here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
