import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './movie.css'; // Corrected import statement

const MoviePrincess: React.FC = () => {
  useParams<{ title: string }>();
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url('/images/princessmononoke.jpg')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 movie-gradient z-10" />
      <div className="absolute inset-0 left-side-gradient z-10" />
      
      {/* Content Container */}
      <div className="relative z-20 h-full text-white p-6 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img 
              src="/images/white.png" 
              alt="Studio Ghibli" 
              className="h-20 mr-2"
            />
          </div>
        </header>
        
        {/* Navigation Buttons */}
        <div className="flex justify-start mb-4">
          <button 
            className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full flex items-center"
            onClick={() => navigate('/movies')}
          >
            <div className="h-8 w-20 mr-2 flex items-center justify-center rounded-full border border-white"> ← Back
                </div>
          </button>
        </div>
        
        {/* Movie Title */}
        <div className="mt-auto mb-4 flex justify-start">
          <img 
            src="/images/11.png"
            alt="Pom Poko" 
            className="h-40"
          />
        </div>
        
        {/* Movie Info */}
        <div className="flex items-center mt-4 space-x-4 subtitle">
          <span>1997</span>
          <span>2h 14m</span>
          <div className="flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png" alt="IMDb" className="h-4 mr-1" />
            <span>8.4/10</span>
          </div>
        </div>
        
        {/* Genres */}
        <div className="flex mt-2 space-x-2 subtitle">
          <span className="bg-gray-800 bg-opacity-70 px-3 py-1 rounded-full text-xs">Adventure</span>
          <span className="bg-gray-800 bg-opacity-70 px-3 py-1 rounded-full text-xs">Fantasy</span>
          <span className="bg-gray-800 bg-opacity-70 px-3 py-1 rounded-full text-xs">Drama</span>
        </div>
        
        {/* Synopsis */}
        <p className="mt-4 text-xl max-w-xl subtitle">
        On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.
        </p>
        
        {/* Director */}
        <p className="mt-4 text-xl subtitle">
          <strong>Directed by:</strong> Hayao Miyazaki
        </p>
        
        {/* Action Buttons */}
        <div className="flex justify-start mt-4">
          <button className="bg-white text-black px-10 py-4 rounded-full flex items-center font-medium text-xl button-text">
            <svg className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Watch now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviePrincess;