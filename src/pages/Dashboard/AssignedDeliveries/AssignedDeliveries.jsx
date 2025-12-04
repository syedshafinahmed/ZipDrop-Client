import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AssignedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ['parcels', user.email, 'driver_assigned'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver_assigned`)
      return res.data;
    }
  })
  return (
    <div>
      <h3 className="text-3xl md:text-5xl text-center py-2">Parcels Pending Pickup: {parcels.length}</h3>
      <div className='flex justify-center'>
        <div className="overflow-x-auto w-full flex justify-center max-w-4xl px-20 mt-10">
          <table className="table border-collapse text-xs">
            {/* head */}
            <thead>
              <tr>
                <th className='text-center border border-gray-300'>
                  Sl
                </th>
                <th className='text-center border border-gray-300'>Name</th>
                <th className='text-center border border-gray-300'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {parcels.map((parcel, index) => <tr key={index}>
                <td className='text-center border border-gray-300'>
                  {index + 1}
                </td>
                <td className='text-center border border-gray-300'>
                  {parcel.parcelName}
                </td>
                <td className='border border-gray-300 flex gap-5 justify-center'>
                  <button className='btn btn-primary text-black btn-xs'>Confirm</button>
                  <button className='btn btn-error text-black btn-xs'>Reject</button>
                </td>
              </tr>)}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default AssignedDeliveries;