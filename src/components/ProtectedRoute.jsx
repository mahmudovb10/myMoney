import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
