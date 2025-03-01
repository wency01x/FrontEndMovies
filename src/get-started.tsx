import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/login');
    }, 500); // Match the duration of the animation
  };

  return (
    <div className={`relative h-screen w-full overflow-hidden ${isAnimating ? 'fade-out' : 'fade-in'}`}>
      {/* Background image with movie posters */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('images/getstarted-bg.png')`,
        }}
      ></div>
      
      {/* Main text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Get Started Button */}
        <button 
          className="bg-white text-gray-900 font-medium py-3 px-8 rounded-full mt-32 hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          onClick={handleClick}
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default App;