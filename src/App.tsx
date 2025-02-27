import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import ForgotPassword from './forgot-password';
import CreateAccount from './SignupPage'; // Ensure you have this component
import MoviePage from './moviePage'; // Import the MoviePage component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/movies" element={<MoviePage />} /> {/* Add the route for MoviePage */}
      </Routes>
    </Router>
  );
};

export default App;