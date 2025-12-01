import React from 'react';
import useAuth from '../hooks/useAuth';
import { BeatLoader } from 'react-spinners';
import useRole from '../hooks/useRole';
import { Navigate } from 'react-router';
import Forbidden from '../components/Forbidden';

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BeatLoader color="#CAEB66" />
      </div>
    );
  }

  if (role !== 'admin') {
    return <Forbidden></Forbidden>
  }


  return children;
};

export default AdminRoute;