import { Navigate, Outlet } from "react-router-dom";
import { IAuthUser } from "../interfaces/interfaces";

const ProtectedRoute = ({ authUser }: { authUser: IAuthUser }) => {
  if (!authUser) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // Outlet renders nested routes
};

export default ProtectedRoute;