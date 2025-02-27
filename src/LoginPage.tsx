import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your authentication logic here
    navigate('/movies'); // Navigate to the MoviePage component
  };

  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/landing-page.png')" }}>
      <div className="login-container flex items-center justify-end h-full">
        <div className="bg-black bg-opacity-50 p-8 rounded-3xl w-full max-w-md">
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <input
                className="w-full p-3 rounded-3xl border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="email"
                name="email"
                placeholder="Email or Username"
                type="text"
              />
            </div>
            <div>
              <input
                className="w-full p-3 rounded-3xl border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="password"
                name="password"
                placeholder="Password"
                type="password"
              />
            </div>
            <button className="w-full p-3 bg-white text-black rounded-3xl font-semibold" type="submit" id='login-button'>Log in 
            </button>
            <div className="text-center">
              <Link to="/forgot-password" className="text-blue-500 underline">Forgot password?</Link>
            </div>
            <div className="text-center text-white">OR</div>
            <button className="w-full p-3 bg-white text-black rounded-3xl font-semibold flex items-center justify-center space-x-2" id='fb-log-in-button' type="button"> 
              <span>Log in with Facebook</span>
            </button>
            <button className="w-full p-3 bg-white text-black rounded-3xl font-semibold flex items-center justify-center space-x-2" id='google-log-in-button' type="button">
              <span>Log in with Google</span>
            </button>
            <div className="text-center text-white">
              Don't have an account? <Link className="text-blue-500 underline" to="/SignupPage">Sign up here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;