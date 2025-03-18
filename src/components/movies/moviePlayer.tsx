import axiosInstance from "@/api/auth/AxiosInstance";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from 'react-player';

const MoviePlayer = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<any>(null);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.get(`/movie/${id}/`).then((response) => {
          setMovie(response.data);
        });
    
      }, [id]);

    return (
        <div
            className="relative w-full h-screen flex justify-center items-center bg-black"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
        {/* Back Button (Visible on Hover) */}
        {isHovered && (
            <button
            onClick={() => navigate(`/movies/${id}`)}
            className="absolute top-5 left-5 px-4 py-2 bg-black bg-opacity-50 text-white rounded-lg transition-opacity duration-300 hover:bg-opacity-80"
            >
            ← Back
            </button>
        )}

        {/* Title Overlay */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
            {movie?.title}
        </div>

            {/* YouTube Player */}
            <ReactPlayer 
                url={movie?.video_url}
                width="100%"
                height="100%" 
                config={{
                    youtube: {
                        playerVars: {
                            modestbranding: 1,
                            rel: 0,
                            showinfo: 0,
                            controls: 0,
                            fs: 1,
                            autoplay: 1,
                        }
                    }
                }}
            />
        </div>
    );
};

export default MoviePlayer;