import { useState, useEffect } from 'react';
import axiosInstance from '@/middleware/Axios-Interceptor';
import { IMovie } from '@/interfaces/interfaces';

export const useMovies = (searchQuery: string = "") => {
  const [movieCards, setMovieCards] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);

      try {
        const endpoint = searchQuery.trim() ? `/movie/search/?q=${searchQuery}` : "/movies/";
        const response = await axiosInstance.get(endpoint);
        setMovieCards(response.data as IMovie[]);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovieCards([]); // Reset to an empty list on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return { movieCards, isLoading };
};
