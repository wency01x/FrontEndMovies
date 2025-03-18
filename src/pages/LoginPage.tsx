import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IAuthUser } from '@/interfaces/interfaces';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useLogin } from '@/hooks/tanstack/api/useLogin';

const LoginPage = ({ setAuthUser }: { setAuthUser: (auth: IAuthUser) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Use the useLogin hook
  const { handleLogin, isAnimating, isLoading } = useLogin(setAuthUser);

  // Check if the fields are empty
  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Ensure the form is valid before submitting
    if (!isFormValid) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Call handleLogin with email and password
    handleLogin({ email, password });
  };

  return (
    <div className={`h-screen bg-cover bg-center ${isAnimating ? 'fade-out' : 'fade-in'}`} style={{ backgroundImage: "url('/images/authentication-bg.png')" }}>
      <div className="absolute inset-0 flex items-center justify-end pr-60 -mt-12 slide-in-right">
        <div className="glass p-8 rounded-3xl w-full max-w-md mx-4">
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <input
                className="w-full p-3 rounded-3xl border border-white/50 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                id="email"
                name="email"
                placeholder="Email or Username"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading} // Disable input during loading
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
                disabled={isLoading} // Disable input during loading
              />
            </div>
            <button
              className="w-full p-3 bg-white text-gray-900 rounded-3xl font-medium hover:bg-opacity-90 transition-all duration-300"
              type="submit"
              id="login-button"
              disabled={!isFormValid || isLoading} // Disable button if fields are empty or during loading
            >
              {isLoading ? 'Loading...' : 'Login'}
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