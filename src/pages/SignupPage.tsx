import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import "@/App.css"
import { useNavigate } from 'react-router-dom';
import { useSignup } from '@/hooks/tanstack/api/useSignup';

const SignupPage: React.FC = () => {
  const { formData, setFormData, mutation, isLoading } = useSignup({
    username: "",
    email: "",
    phoneNumber: "",
    fullName: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
    
  };

  return (
    
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/bg-w-logo.png')" }}>
        <div className="flex items-center justify-center h-full">
          <div className="glass p-8 rounded-3xl w-full max-w-md fade-in">
            {mutation.isError && <p className="text-center text-red-400">Signup failed. Try again.</p>}
            <form className="space-y-4" onSubmit={handleSignUp}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 rounded-3xl border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-3xl border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-3 rounded-3xl border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 rounded-3xl border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 rounded-3xl border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button 
                type="submit" 
                className="w-full p-2 bg-white text-black rounded-3xl disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? "Signing up..." : "Sign up"}
              </button>
            </form>
            <div className="mt-4 text-center">
              <span className="text-white">
                Already have an account? <Link to="/login" className="text-blue-400">Log in here</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default SignupPage;
