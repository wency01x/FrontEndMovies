import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import CreateAccount from './SignupPage'; // Ensure you have this component
import MoviePage from './moviePage'; // Import the MoviePage component
import axios from 'axios';

const App: React.FC = () => {
  const [quote, setQuote] = useState<string>('');

  useEffect(() => {
    console.log('Making request to http://localhost:5174/');
    axios.get('http://localhost:5174/')
      .then(res => {
        console.log('Response received:', res);
        setQuote(res.data.content);
      })
      .catch(err => {
        console.log('Error occurred:', err);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/movies" element={<MoviePage />} /> {/* Add the route for MoviePage */}
      </Routes>
      <div>
        <p>Random Quote: {quote}</p>
      </div>
    </Router>
  );
};

export default App;