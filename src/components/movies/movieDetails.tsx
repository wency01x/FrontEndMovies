import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./movie.css"; // Keep your styling
import axiosInstance from "@/middleware/Axios-Interceptor";

const movies = {
  howl: {
    title: "Howl's Moving Castle",
    year: 2004,
    duration: "1h 59m",
    imdb: "8.2/10",
    genres: ["Adventure", "Fantasy", "Romance", "Steampunk"],
    director: "Hayao Miyazaki",
    synopsis:
      "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
    background: "/images/howl.jpg",
    poster: "/images/15.png",
  },
  nausica: {
    title: "Nausicaä of the Valley of the Wind",
    year: 1984,
    duration: "1h 57m",
    imdb: "8.1/10",
    genres: ["Adventure", "Fantasy", "Sci-Fi"],
    director: "Hayao Miyazaki",
    synopsis:
      "A young princess, Nausicaä, tries to stop an environmental catastrophe and bring peace between warring nations and the giant mutant insects of the Toxic Jungle.",
    background: "/images/nausica.jpg",
    poster: "/images/nausica.png",
  },
  // Add more movies here...
};

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<any>({}); // Change this to the correct type

  // const movie = Object.values(movies).find((m) => m.title.toLowerCase() === title?.toLowerCase());

  useEffect(() => {
    axiosInstance.get(`/movie/${id}/`).then((response) => {
      setMovie(response.data);
    //   {
    //     "id": 9,
    //     "title": "The Boy and the Heron",
    //     "genre": "Adventure, Fantasy, Drama",
    //     "release_date": "2023-07-14",
    //     "poster_image": "https://res.cloudinary.com/dn7umol6y/image/upload/v1740631003/The_Boy_and_the_Heron_wlgyau.jpg",
    //     "average_rating": 8,
    //     "duration": "02:04:00",
    //     "video_url": "https://youtu.be/UlX020o9OTI?si=EXD_0L4Uel9dvET5"
    //  
    // year
    // imdb
    // director
    // synopsis
    // background
    // poster
    // }

      // setMovie({
      //   title: "Howl's Moving Castle",
      //   year: 2004,
      //   duration: "1h 59m",
      //   imdb: "8.2/10",
      //   genres: ["Adventure", "Fantasy", "Romance", "Steampunk"],
      //   director: "Hayao Miyazaki",
      //   synopsis:
      //     "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
      //   background: "/images/howl.jpg",
      //   poster: "/images/15.png",
      // });
    });

  }, [id]);

  // if (!movie) {
  //   return <div className="text-white p-6">Movie not found.</div>;
  // }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${movie.background}')` }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 movie-gradient z-10" />
      <div className="absolute inset-0 left-side-gradient z-10" />

      {/* Content Container */}
      <div className="relative z-20 h-full text-white p-6 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img src="/images/white.png" alt="Studio Ghibli" className="h-20 mr-2" />
          </div>
        </header>

        {/* Navigation Buttons */}
        <div className="flex justify-start mb-4">
          <button
            className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full flex items-center"
            onClick={() => navigate("/movies")}
          >
            <div className="h-8 w-20 mr-2 flex items-center justify-center rounded-full border border-white">
              ← Back
            </div>
          </button>
        </div>

        {/* Movie Title */}
        <div className="mt-auto mb-4 flex justify-start">
          <img src={movie.poster} alt={movie.title} className="h-40" />
        </div>

        {/* Movie Info */}
        <div className="flex items-center mt-4 space-x-4 subtitle">
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png"
              alt="IMDb"
              className="h-4 mr-1"
            />
            <span>{movie.imdb}</span>
          </div>
        </div>

        {/* Genres */}
        {/* <div className="flex mt-2 space-x-2 subtitle">
          {movie.genres.map((genre) => (
            <span key={genre} className="bg-gray-800 bg-opacity-70 px-3 py-1 rounded-full text-xs">
              {genre}
            </span>
          ))}
        </div> */}

        {/* Synopsis */}
        <p className="mt-4 text-xl max-w-xl subtitle">{movie.synopsis}</p>

        {/* Director */}
        <p className="mt-4 text-xl subtitle">
          <strong>Directed by:</strong> {movie.director}
        </p>

        {/* Action Buttons */}
        <div className="flex justify-start mt-4">
          <button 
            className="bg-white text-black px-10 py-4 rounded-full flex items-center font-medium text-xl button-text"
            onClick={() => navigate(`/movies/${id}/watch`)}
            >
            <svg className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            Watch now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
