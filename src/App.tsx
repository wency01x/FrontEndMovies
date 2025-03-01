import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage'; // Ensure the import name matches the component name
import MoviePage from './moviePage'; // Ensure the import name matches the component name
import GetStarted from './get-started'; // Import the GetStarted component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<SignupPage />} /> {/* Ensure the route matches the component */}
        <Route path="/movies" element={<MoviePage />} />
      </Routes>
    </Router>
  );
};

export default App;