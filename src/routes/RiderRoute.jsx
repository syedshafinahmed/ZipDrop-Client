import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import { BeatLoader } from 'react-spinners';

const RiderRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading || !user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BeatLoader color="#CAEB66" />
      </div>
    );
  }

  if (role !== 'rider') {
    return <Forbidden></Forbidden>
  }

  return children;
};

export default RiderRoute;