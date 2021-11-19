import React from "react";
import { Navigate, Route, useLocation } from "react-router";
import useAuth from "./useAuth";
import MySpinner from "../shared/MySpinner/MySpinner";
const PrivateRoute = ({ children, ...rest }) => {
  const { auth, user, isLoading } = useAuth();
  if (isLoading) {
    <MySpinner />
  }
   return auth || user.email ? (
     children
   ) : (
     <Navigate to="/login"/>
   );

};

export default PrivateRoute;
