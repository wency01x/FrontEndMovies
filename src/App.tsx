import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import MoviePage from './moviePage';
import GetStarted from './get-started';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<SignupPage />} />
        <Route path="/movies" element={<MoviePage />} />
      </Routes>
    </Router>
  );
};

export default App;