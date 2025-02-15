import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Loader, Text } from "@mantine/core";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children?: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="loader-container">
        <Loader size="lg" />
        <Text>Loading...</Text>
      </div>
    );
  }

  return user ? children || <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
