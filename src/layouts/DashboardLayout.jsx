import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import Logo from '../components/logo/Logo'
import logo from '../assets/logo.png'
import { FaHome, FaMotorcycle, FaShippingFast, FaUsers } from 'react-icons/fa';
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { IoSend, IoSettingsSharp } from 'react-icons/io5';
const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open bg-gray-200">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
            {/* Sidebar toggle icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
          </label>
          <div className="px-4">ZipDrop Dashboard</div>
        </nav>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <div className="is-drawer-open:block is-drawer-close:hidden">
                <Logo /> {/* full logo */}
              </div>

              <div className="is-drawer-open:hidden is-drawer-close:flex items-center justify-center">
                <img src={logo} /> {/* small icon */}
              </div>
            </li>
            <li>
              <Link to='/' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                {/* Home icon */}
                <FaHome size={20}></FaHome>
                <span className="is-drawer-close:hidden font-bold">Homepage</span>
              </Link>
            </li>

            {/* dashboard links */}
            <li>
              <NavLink to='/send-parcel' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Send Parcel"><IoSend size={20} />
                <span className="is-drawer-close:hidden font-bold">Send Parcel</span></NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/my-parcels' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Parcels"><FaShippingFast size={20} />
                <span className="is-drawer-close:hidden font-bold">My Parcels</span></NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/payment-history' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Payment History"><BsCreditCard2FrontFill size={20} />
                <span className="is-drawer-close:hidden font-bold">Payment History</span></NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/approve-riders' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Approve Riders"><FaMotorcycle size={20} />
                <span className="is-drawer-close:hidden font-bold">Approve Riders</span></NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/users-management' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Users Management"><FaUsers size={20} />
                <span className="is-drawer-close:hidden font-bold">Users Management</span></NavLink>
            </li>

            {/* List item */}
            <li>
              <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                <IoSettingsSharp size={20} />
                <span className="is-drawer-close:hidden font-bold">Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;