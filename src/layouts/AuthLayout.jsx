import React from 'react';
import Logo from '../components/logo/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 bg-gray-200 flex flex-col items-center justify-center p-10">
        <div className='mr-20'>
          <Logo />
        </div>
        <div className="w-full max-w-md mt-10">
          <Outlet />
        </div>
      </div>
      <div className="hidden md:flex flex-1 bg-primary items-center justify-center p-10">
        <img
          src={authImg}
          alt="Auth Illustration"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
