import { Navigate, Outlet } from "react-router-dom";
import { AuthUser } from "../interfaces/interfaces";

const ProtectedRoute = ({ authUser }: { authUser: AuthUser }) => {
  if (!authUser) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // Outlet renders nested routes
};

export default ProtectedRoute;