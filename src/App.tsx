import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MoviePage from "@/pages/MoviePage";
import GetStarted from "./pages/GetStartedPage";
import MovieDetails from "./components/movies/movieDetails";
import MoviePlayer from "./components/movies/moviePlayer";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
        <ToastContainer position="top-center" autoClose={750} />
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