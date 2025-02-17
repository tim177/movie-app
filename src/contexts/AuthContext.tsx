// src/contexts/AuthContext.tsx
import { createContext, useContext, ReactNode, useMemo } from "react";
import { useAuthState } from "../hooks/useAuthState";
import { loginUser, registerUser, logoutUser } from "../services/authService";
import { User } from "firebase/auth";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useAuthState();

  const login = async (email: string, password: string) => {
    try {
      await loginUser(email, password);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const register = async (email: string, password: string) => {
    try {
      await registerUser(email, password);
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  };

  // Memoizing the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({ user, isLoading, login, register, logout }),
    [user, isLoading]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
