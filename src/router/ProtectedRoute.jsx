import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../context/useAuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  if (loading) return  <div className="h-8 w-8 border-4 border-t-transparent animate-spin border-gray-800 rounded-full"></div>;

  if (!user) return <Navigate to="/auth/login" state={{ from: location }} replace />;

  return children;
};

export default ProtectedRoute;
