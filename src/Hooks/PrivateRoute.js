import React from "react";
import { Navigate,useLocation } from "react-router";
import useAuth from "./useAuth";
const PrivateRoute = ({ children, ...rest }) => {
  const { auth, user } = useAuth();
  const location = useLocation();
  const loc = location?.state?.from || "/home"
  return auth || user.email ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: loc }} />
  );
};

export default PrivateRoute;
