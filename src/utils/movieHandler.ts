import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAuthUser } from '@/interfaces/interfaces';

export const useMovieHandlers = (
  setAuthUser: (auth: IAuthUser | null) => void,
  setSearchQuery: (query: string) => void
) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.clear(); // Remove the access token
    setAuthUser(null);
    navigate('/', { replace: true }); // Navigate to the login page
  };

  return {
    isDropdownOpen,
    handleSearch,
    toggleDropdown,
    handleLogout,
  };
};