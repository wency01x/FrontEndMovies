import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import MoviePage from "./moviePage";
import GetStarted from "./get-started";
import MovieNausica from "./components/movies/movieNausica";
import MovieCastle from "./components/movies/movieCastle";
import MovieGrave from "./components/movies/movieGrave";
import MovieKiki from "./components/movies/movieKiki";
import MovieTotoro from "./components/movies/movieTotoro";
import MovieOnly from "./components/movies/movieOnly";
import MoviePorco from "./components/movies/moviePorco";
import MovieOcean from "./components/movies/movieOcean";
import MoviePom from "./components/movies/moviePom";
import MovieWhisper from "./components/movies/movieWhisper";
import MoviePrincess from "./components/movies/moviePrincess";
import MovieYamada from "./components/movies/movieYamada";
import MovieSpirited from "./components/movies/moviesSpirited";
import MovieTheCat from "./components/movies/movieTheCat";
import MovieHowl from "./components/movies/movieHowl";
import MovieTales from "./components/movies/movieTales";
import MoviePonyo from "./components/movies/moviePonyo";
import MovieArrietty from "./components/movies/movieArrietty";
import MoviePoppy from "./components/movies/moviePoppy";

const App: React.FC = () => {
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/movies/", { withCredentials: true }) // Make sure this is the correct endpoint
      .then((res) => console.log(res.data)) // Log response data
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<SignupPage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/movieNausica" element={<MovieNausica />} />
        <Route path="/movies/movieCastle" element={<MovieCastle />} />
        <Route path="/movies/movieGrave" element={<MovieGrave />} />
        <Route path="/movies/movieTotoro" element={<MovieTotoro />} />
        <Route path="/movies/movieKiki" element={<MovieKiki />} />
        <Route path="/movies/movieOnly" element={<MovieOnly />} />
        <Route path="/movies/moviePorco" element={<MoviePorco />} />
        <Route path="/movies/movieOcean" element={<MovieOcean />} />
        <Route path="/movies/moviePom" element={<MoviePom />} />
        <Route path="/movies/movieWhisper" element={<MovieWhisper />} />
        <Route path="/movies/moviePrincess" element={<MoviePrincess />} />
        <Route path="/movies/movieYamada" element={<MovieYamada />} />
        <Route path="/movies/movieSpirited" element={<MovieSpirited />} />
        <Route path="/movies/movieTheCat" element={<MovieTheCat />} />
        <Route path="/movies/movieHowl" element={<MovieHowl />} />
        <Route path="/movies/movieTales" element={<MovieTales />} />
        <Route path="/movies/moviePonyo" element={<MoviePonyo />} />
        <Route path="/movies/movieArrietty" element={<MovieArrietty />} />
        <Route path="/movies/moviePoppy" element={<MoviePoppy />} />
      </Routes>
    </Router>
  );
};

export default App;
