import React, { type JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>; // optional loading state

  if (!user) {
    return <Navigate to="/login" replace />; // redirect if not logged in
  }

  return children;
};

export default ProtectedRoute;
