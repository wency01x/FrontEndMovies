import { useState, useEffect } from 'react';
import { Search, User, LogOut } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import axiosInstance from "./api/axiosInstance";
import axios from 'axios';


function MoviePage() {
  // State to control dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // State to store movie data
  const [movieCards, setMovieCards] = useState<{ title: string; year: string; duration: string; path?: string }[]>([]);

  // Toggle dropdown function
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Use navigate hook
  const navigate = useNavigate();

  // Handle logout function
  const handleLogout = () => {
    // Add your logout logic here
    navigate('/'); // Navigate to the login page
  };

  // Fetch movie data
  useEffect(() => {
    axiosInstance
      .get("/movies")
      .then((response) => {
        setMovieCards(response.data as { title: string; year: string; duration: string; path?: string }[]);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        if (error.response) {
          console.error("Error response data:", error.response.data);
          console.error("Error response status:", error.response.status);
          console.error("Error response headers:", error.response.headers);
        }
      });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="mr-4">
            <img 
              src="https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&q=80&w=80&h=80" 
              alt="Studio Ghibli Logo" 
              className="h-10 w-10 object-contain"
            />
          </div>
          <div className="text-xs flex flex-col">
            <span className="text-gray-300">スタジオジブリ作品</span>
            <span className="font-bold">STUDIO Ghibli</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-black border border-gray-600 rounded-full py-1 px-4 pr-10 text-sm"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <button className="text-white">Home</button>
          <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">Movies</button>
          <button className="text-white">My Library</button>
          
          {/* User Profile with Dropdown */}
          <div className="relative">
            <button 
              onClick={toggleDropdown}
              className="flex items-center ml-4 focus:outline-none"
            >
              <div className="bg-gray-700 rounded-full p-1">
                <User className="h-5 w-5" />
              </div>
              <span className="ml-2">hawirr</span>
              <svg 
                className={`h-4 w-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10 border border-gray-700">
                <button 
                  className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Movie Grid */}
      <div className="grid grid-cols-6 gap-4 p-4">
        {movieCards.map((movie, index) => (
          <Link to={movie.path || `/movies/${encodeURIComponent(movie.title)}`} key={index} className="flex flex-col">
            <div className="bg-gray-300 aspect-[3/4] rounded-md mb-2"></div>
            <h3 className="text-sm font-medium">{movie.title}</h3>
            <p className="text-xs text-gray-400">{movie.year}</p>
            <p className="text-xs text-gray-400">{movie.duration}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MoviePage;