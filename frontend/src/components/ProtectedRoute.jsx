import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const role = localStorage.getItem("role"); // or some auth token check

  if (!role) {
    return <Navigate to="/" />; // redirect to login if not logged in
  }

  return children;
};

export default ProtectedRoute;
