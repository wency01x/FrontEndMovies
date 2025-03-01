import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import './App.css';

const SignupPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign Up:', { username, email, password, confirmPassword });
  };

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/kokurikozaka003.jpg')" }}>
      <div className="flex items-center justify-center h-full">
        <div className="bg-black bg-opacity-50 p-8 rounded-3xl w-full max-w-md">
          <form className="space-y-4" onSubmit={handleSignUp}>
            <div>
              <input
                type="text"
                id="username"
                placeholder="Create username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 rounded-3xl border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-3xl border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-3xl border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 rounded-3xl border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <button type="submit" className="w-full p-2 bg-white text-black rounded-3xl" id='sign-up-button'>
                Sign up
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <span className="text-white">
              Already have an account? <a href="/" className="text-blue-400">Log in here</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;