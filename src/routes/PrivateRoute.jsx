import React from 'react';
import useAuth from '../hooks/useAuth';
import { BeatLoader } from 'react-spinners';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <BeatLoader color="#03373D" />
    </div>
  }
  if (!user) {
    return <Navigate to='/login' state={location.pathname}></Navigate>
  }
  return children;
};

export default PrivateRoute;