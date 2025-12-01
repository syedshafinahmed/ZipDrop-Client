import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaUserShield } from "react-icons/fa6";
import { FiShieldOff } from "react-icons/fi";
import Swal from 'sweetalert2';

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    }
  })

  const handleMakeUser = (user) => {

    Swal.fire({
      title: "Are you sure?",
      text: `Make ${user.displayName || "this user"} an Admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#03373D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!"
    }).then((result) => {
      if (result.isConfirmed) {

        const roleInfo = { role: 'admin' };

        axiosSecure.patch(`/users/${user._id}`, roleInfo)
          .then(res => {
            if (res.data.modifiedCount) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.displayName} is now an Admin`,
                showConfirmButton: false,
                timer: 2000
              }).then(() => refetch());
            }
          });
      }
    });

  }

  const handleRemoveAdmin = (user) => {

    Swal.fire({
      title: "Are you sure?",
      text: `Remove admin privileges from ${user.displayName || "this user"}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#03373D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove admin"
    }).then((result) => {

      if (result.isConfirmed) {
        const roleInfo = { role: 'user' };

        axiosSecure.patch(`/users/${user._id}`, roleInfo)
          .then(res => {
            if (res.data.modifiedCount) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.displayName} removed from Admin`,
                showConfirmButton: false,
                timer: 2000
              });
            }
          });
      }

    });

  };



  return (
    <div>
      <h2 className='text-5xl text-center py-2'>Manage Users: {users.length}</h2>
      <div className="overflow-x-auto px-20 mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className='text-center border border-gray-300'>
                Sl
              </th>
              <th className='text-center border border-gray-300'>Name</th>
              <th className='text-center border border-gray-300'>Email</th>
              <th className='text-center border border-gray-300'>Role</th>
              <th className='text-center border border-gray-300'>Admin Action</th>
              <th className='text-center border border-gray-300'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => <tr>
              <td className='text-center border border-gray-300'>
                {index + 1}
              </td>
              <td className='text-center border border-gray-300'>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.photoURL || "https://i.ibb.co.com/0R5PkKdT/premium-photo-1661520696317-d0deaddafda7.jpg"}
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.displayName}</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td className='text-center border border-gray-300'>
                {user.email}
              </td>
              <td className='text-center border border-gray-300'>
                {user.role}
              </td>
              <td className='text-center border border-gray-300'>
                {user.role === 'admin' ?
                  <button onClick={() => handleRemoveAdmin(user)} className='btn bg-red-500'>
                    <FiShieldOff />
                  </button> :
                  <button onClick={() => handleMakeUser(user)} className='btn bg-primary'>
                    <FaUserShield />
                  </button>}
              </td>
              <td className='text-center border border-gray-300'>
                Actions
              </td>
            </tr>)}

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default UsersManagement;