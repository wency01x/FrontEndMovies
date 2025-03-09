import { useState, useEffect } from 'react';
import { Search, User, LogOut } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import axiosInstance from "./api/axiosInstance";




interface Movie {
  id: number;
  title: string;
  genre?: string;
  year: string;
  duration: string;
  path?: string;
  videoUrl?: string;
  poster_image: string;
}

function MoviePage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [movieCards, setMovieCards] = useState<Movie[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("/movies/")
      .then((response) => {
        setMovieCards(response.data as Movie[]);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken"); // Remove the access token
    navigate('/'); // Navigate to the login page
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="mr-4">
            <img 
              src="/images/white.png" 
              alt="Studio Ghibli Logo" 
              className="h-10 w-15 object-contain"
            />
          </div>
          <div className="text-xs flex flex-col">
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
        {movieCards.length > 0 ? (
          movieCards.map((movie, index) => (
            <Link to={`/movies/${movie.id}`} key={index} className="flex flex-col">
              <div className="bg-gray-300 aspect-[3/4] rounded-md mb-2">
              {movie.poster_image ? (
              <img src={movie.poster_image} alt={movie.title} className="object-cover h-full w-full rounded-md" />
              ) : (
              <div className="flex items-center justify-center h-full text-gray-500">No Image</div>
              )}

              </div>
              <h3 className="text-sm font-medium">{movie.title}</h3>
              <p className="text-xs text-gray-400">{movie.genre || "Unknown Genre"}</p>
              <p className="text-xs text-gray-400">{movie.year}</p>
              <p className="text-xs text-gray-400">{movie.duration}</p>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-6">No movies available.</p>
        )}
      </div>
    </div>
  );
}

export default MoviePage;