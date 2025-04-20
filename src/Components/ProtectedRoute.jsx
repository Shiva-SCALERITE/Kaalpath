import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while checking authentication
  }

  if (!user) {
    return <Navigate to="/" />; // Redirect to home or login page if not authenticated
  }

  return children; // Render the protected component if authenticated
};

export default ProtectedRoute;