import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import './App.css';

const SignupPage: React.FC = () => {
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    fullName: '',
    password: '',
  });

  // Handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // API function to register a user
  const signup = async () => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/register/`, {
        ...formData,
        password2: confirmPassword, // Ensure password2 is sent correctly
      }, {
        headers: { 'Content-Type': 'application/json' },
      });

      return response.data; // Success message or response data
    } catch (error: any) {
      return error.response?.data || { error: "Signup failed. Please try again." };
    }
  };

  // Handle form submission
const handleSignUp = async (e: React.FormEvent) => {
  e.preventDefault();

  const result = await signup();

  if (result?.id) {
    setMessage("User registered successfully!");
    setFormData({
      username: '',
      email: '',
      phoneNumber: '',
      fullName: '',
      password: '',
    })

  } else if (result?.error) {
    setMessage(result.error);
  } else {
    setMessage("An unexpected error occurred.");
  }
};

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/bg-w-logo.png')" }}>
      <div className="flex items-center justify-center h-full">
        <div className="glass p-8 rounded-3xl w-full max-w-md fade-in">
          {message && <p className="text-center text-red-400">{message}</p>}
          <form className="space-y-4" onSubmit={handleSignUp}>
            {/* Username */}
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 rounded-3xl border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-3xl border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Phone Number */}
            <div>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-3 rounded-3xl border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 rounded-3xl border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Password */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 rounded-3xl border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button type="submit" className="w-full p-2 bg-white text-black rounded-3xl">
                Sign up
              </button>
            </div>
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
