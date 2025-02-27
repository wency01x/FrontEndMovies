import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/karigurashi002.jpg')" }}>
      <div className="bg-black bg-opacity-50 p-8 rounded-3xl w-full max-w-md">
        <h1 className="text-2xl text-center font-bold mb-4 text-white">Recover your account</h1>
        <p className="text-center mb-6 text-white">
          Enter your email and we’ll send you a link to get back into your account.
        </p>
        <input 
          type="email" 
          placeholder="Email address" 
          className="w-full p-3 mb-4 rounded-3xl border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="w-full p-3 bg-transparent border border-white-300 text-black rounded-3xl font-semibold flex items-center justify-center space-x-2" id='send-log-in-link-button' >
          Send
        </button>
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-white-500">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>
        <div className="flex justify-center">
          <Link to="/" className="text-blue-500 hover:underline">
            Back to log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;