import React from 'react';
import Logo from '../../../components/logo/Logo';
import { NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut()
    .then(result => {

    })
    .catch(error => {
      console.log(error)
    })
  }
  const links =
    <>
      <li className='mr-5'><NavLink to='/'>Services</NavLink></li>
      <li className='mr-5'><NavLink to='/coverage'>Coverage</NavLink></li>
      <li className='mr-5'><NavLink to='/about'>About Us</NavLink></li>
      <li className='mr-5'><NavLink to='/pricing'>Pricing</NavLink></li>
      <li className='mr-5'><NavLink to='/rider'>Be a Rider</NavLink></li>
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm rounded-xl py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <div className="ml-5 text-xl">
          <Logo></Logo>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ?
          <div className='flex gap-5 items-center'>
            <img src={user.photoURL || "https://via.placeholder.com/150"} referrerPolicy="no-referrer" alt="User" className='border-2 border-primary rounded-full w-11 h-11' />
            <button onClick={handleLogout} className='w-20 border-none btn text-xs btn-primary text-black'>Logout</button>
          </div>
          :
          <div className='flex gap-5'>
            <NavLink to='/login' className='w-20 border-none btn text-xs btn-primary text-black'>Login</NavLink>
            <NavLink to='/register' className='w-20 border-none btn text-xs btn-primary text-black'>Register</NavLink>
          </div>}
      </div >
    </div >
  );
};

export default Navbar;