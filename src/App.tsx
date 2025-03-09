import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import MoviePage from "./moviePage";
import GetStarted from "./get-started";
import MovieDetails from "./components/movies/movieDetails";
import MoviePlayer from "./components/movies/moviePlayer";
import ProtectedRoute from "./ProtectedRoute";

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
  const [authUser, setAuthUser] = React.useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("authUser");
    if (storedUser && accessToken) {
      setAuthUser(JSON.parse(storedUser)); // Parse if it's stored as JSON
    }  
  }, [])

  return (
    <Router>
      <Routes>
      {/* Public Routes (redirect if logged in) */}
      <Route
        path="/"
        element={authUser ? <Navigate to="/movies" replace /> : <GetStarted />}
      />
      <Route
        path="/login"
        element={authUser ? <Navigate to="/movies" replace /> : <LoginPage setAuthUser={setAuthUser} />}
      />
      <Route
        path="/create-account"
        element={authUser ? <Navigate to="/movies" replace /> : <SignupPage />}
      />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute authUser={authUser} />}>
          <Route path="/movies" element={<MoviePage setAuthUser={setAuthUser} authUser={authUser} />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/movies/:id/watch" element={<MoviePlayer />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;