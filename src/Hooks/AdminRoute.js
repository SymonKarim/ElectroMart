import React from 'react'

import { Navigate, useLocation } from "react-router";
import MySpinner from '../shared/MySpinner/MySpinner';
import useAuth from './useAuth';

const AdminRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const { auth, user, isLoading, admin, isAdminLoading } = useAuth();
  if (isLoading || isAdminLoading) {
    <MySpinner />
    }
   return (auth || user.email) && admin ? (
     children
   ) : (
     <Navigate to="/admin#" state={{ from: location }} />
   );
};

export default AdminRoute
