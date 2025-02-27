import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage.tsx';
import SignupPage from './SignupPage.tsx';
import ForgotPassword from './forgot-password';
import CreateAccount from './SignupPage';
import MoviePage from './moviePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/SignupPage" element={<CreateAccount />} />
        <Route path="/movies" element={<MoviePage />} /> 
      </Routes>
    </Router>
  );
};

export default App;

