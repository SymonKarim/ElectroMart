import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "./useAuth";
import MySpinner from "../shared/MySpinner/MySpinner";
const PrivateRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const { auth, user, isLoading } = useAuth();
  if (isLoading) {
    <MySpinner />
  }
   return auth || user.email ? (
     children
   ) : (
     <Navigate to="/login" state={{from: location}} />
   );

};

export default PrivateRoute;
