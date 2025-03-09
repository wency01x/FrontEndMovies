import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import MoviePage from "./moviePage";
import GetStarted from "./get-started";
import MovieDetails from "./components/movies/movieDetails";
import MoviePlayer from "./components/movies/moviePlayer";

/* gi try nakog hardcode ang movies, idk how to make it dynamic thats why naa ni
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
import MovieDetails from "./components/movies/movieDetails";
import MovieTales from "./components/movies/movieTales";
import MoviePonyo from "./components/movies/moviePonyo";
import MovieArrietty from "./components/movies/movieArrietty";
import MoviePoppy from "./components/movies/moviePoppy"; */
 
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
        <Route path="/movies/:id" element={<MovieDetails />} /> {/* still dli mo direct sa movie components */}
        <Route path="/movies/:id/watch" element={<MoviePlayer />} />
      </Routes>
    </Router>
  );
};

export default App;
