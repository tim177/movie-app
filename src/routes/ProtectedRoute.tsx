import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Loader, Text, Center } from "@mantine/core";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children?: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <Center style={{ height: "100vh", flexDirection: "column" }}>
        <Loader size="lg" />
        <Text mt="md">Loading...</Text>
      </Center>
    );
  }

  return user ? (
    <>{children ?? <Outlet />}</>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
