import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import CreateAccount from './SignupPage';
import MoviePage from './moviePage';
import GetStarted from './get-started'; // Import the GetStarted component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/movies" element={<MoviePage />} />
      </Routes>
    </Router>
  );
};

export default App;