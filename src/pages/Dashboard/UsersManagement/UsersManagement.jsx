import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    }
  })
  return (
    <div>
      <h2 className='text-5xl text-center py-2'>Manage Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                Sl
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => <tr>
              <td>
                {index + 1}
              </td>
              <td>
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
              <td>
                {user.email}
              </td>
              <td>Admin</td>
              <th>
                Actions
              </th>
            </tr>)}

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default UsersManagement;