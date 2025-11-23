import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaTrash } from 'react-icons/fa';
import { SiTicktick } from 'react-icons/si';
import { ImCross } from 'react-icons/im';

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { data: riders = [] } = useQuery({
    queryKey: ['riders', 'pending'],
    queryFn: async () => {
      const res = await axiosSecure.get('/riders');
      return res.data;

    }
  })

  const handleApproval = (id) => {
    
  }


  return (
    <div>
      <h2 className='text-5xl text-center py-2'>Pending Rider Approvals: {riders.length}</h2>

      <div className="flex justify-center">
        <div className="overflow-x-auto w-full flex justify-center max-w-4xl py-4">
          <table className="table table-zebra w-auto border border-gray-300 border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 text-center">Sl</th>
                <th className="border border-gray-300 text-center">Name</th>
                <th className="border border-gray-300 text-center">Driving Lisence</th>
                <th className="border border-gray-300 text-center">Region</th>
                <th className="border border-gray-300 text-center">District</th>
                <th className="border border-gray-300 text-center">Bike</th>
                <th className="border border-gray-300 text-center">Status</th>
                <th className="border border-gray-300 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {riders.map((rider, index) => (
                <tr key={rider._id}>
                  <th className="border border-gray-300 text-center">{index + 1}</th>
                  <td className="border border-gray-300 text-center">{rider.name}</td>
                  <td className="border border-gray-300 text-center">{rider.drivingLicense}</td>
                  <td className="border border-gray-300 text-center">{rider.region}</td>
                  <td className="border border-gray-300 text-center">{rider.district}</td>
                  <td className="border border-gray-300 text-center">{rider.bike}</td>
                  <td className="border border-gray-300 text-center">{rider.status}</td>
                  <td className="text-center flex items-center justify-between gap-3">
                    <button onClick={() => handleApproval(rider._id)} className="btn hover:bg-primary">
                      <SiTicktick />
                    </button>
                    <button className="btn hover:bg-primary">
                      <ImCross />
                    </button>
                    <button className="btn hover:bg-primary">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApproveRiders;