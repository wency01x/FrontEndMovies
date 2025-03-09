import { Navigate, Outlet } from "react-router-dom";
import { AuthUser } from "./LoginPage";

const ProtectedRoute = ({ authUser }: { authUser: AuthUser }) => {
  if (!authUser) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // Outlet renders nested routes
};

export default ProtectedRoute;