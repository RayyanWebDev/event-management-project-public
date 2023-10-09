import React, { useContext } from "react";
import { AuthContext } from "../Components/Firebase/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return;
  }
  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate to="/SignIn"></Navigate>
    </div>
  );
};

export default PrivateRoutes;
