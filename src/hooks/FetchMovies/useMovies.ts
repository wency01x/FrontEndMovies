import { useState, useEffect } from 'react';
import axiosInstance from "@/middleware/Axios-Interceptor";
import { IMovie } from '@/interfaces/interfaces';

export const useMovies = (searchQuery: string = "") => {
  const [movieCards, setMovieCards] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);

      try {
        const token = localStorage.getItem("accessToken");
        console.log("🔹 Fetching movies with token:", token);

        const endpoint = searchQuery ? `/movie/search/?q=${searchQuery}` : "/movies/";
        console.log("🔹 API URL:", import.meta.env.VITE_API_URL + endpoint);

        const response = await axiosInstance.get(endpoint);
        console.log("✅ API Response:", response.data);

        setMovieCards(response.data as IMovie[]);
      } catch (error) {
        console.error("❌ Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return { movieCards, isLoading };
};
