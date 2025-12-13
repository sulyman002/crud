import { Navigate } from "react-router-dom";
import useAuthContext from "../context/useAuthContext";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  // const location = useLocation();

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center w-full">
        <div className="h-8 w-8 border-4 border-t-transparent animate-spin border-gray-800 rounded-full"></div>
      </div>
    );

 if (user && user.emailVerified) {
  return <Navigate to="/en/dashboard" replace />;
}
  return children;
};

export default PublicRoute;
