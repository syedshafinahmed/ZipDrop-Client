import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaTrash } from 'react-icons/fa';
import { SiTicktick } from 'react-icons/si';
import { ImCross } from 'react-icons/im';
import Swal from 'sweetalert2';

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: riders = [] } = useQuery({
    queryKey: ['riders', 'pending'],
    queryFn: async () => {
      const res = await axiosSecure.get('/riders');
      return res.data;

    }
  })

  const updateRiderStatus = (rider, status) => {
    const updateInfo = { status: status, email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
      .then(res => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Rider Application has been approved",
            showConfirmButton: false,
            timer: 2000,
            text: "Congratulations! You're a rider now.",
          });
        }
      })
  }

  const handleApproval = (rider) => {
    updateRiderStatus(rider, 'approved');
  }

  const handleRejection = (rider) => {
    updateRiderStatus(rider, 'rejected');
  }


  return (
    <div>
      <h2 className='text-5xl text-center py-2'>Pending Rider Approvals: {riders.length}</h2>

      <div className="flex justify-center">
        <div className="overflow-x-auto w-full flex justify-center max-w-6xl py-4">
          <table className="table table-zebra w-auto border border-gray-300 border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 text-center">Sl</th>
                <th className="border border-gray-300 text-center wrap-break-word whitespace-normal">Name</th>
                <th className="border border-gray-300 text-center">Driving Lisence</th>
                <th className="border border-gray-300 text-center">Region</th>
                <th className="border border-gray-300 text-center">District</th>
                <th className="border border-gray-300 text-center">Bike</th>
                <th className="border border-gray-300 text-center">Application Status</th>
                <th className="border border-gray-300 text-center">Work Status</th>
                <th className="border border-gray-300 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {riders.map((rider, index) => (
                <tr key={rider._id}>
                  <th className="border border-gray-300 text-center">{index + 1}</th>
                  <td className="border border-gray-300 text-center wrap-break-word whitespace-normal">{rider.name}</td>
                  <td className="border border-gray-300 text-center">{rider.drivingLicense}</td>
                  <td className="border border-gray-300 text-center">{rider.region}</td>
                  <td className="border border-gray-300 text-center">{rider.district}</td>
                  <td className="border border-gray-300 text-center">{rider.bike}</td>
                  <td className="border border-gray-300 text-center">
                    <p
                      className={rider.status === 'approved' ? 'badge badge-secondary' : 'badge badge-error'}>
                      {rider.status}
                    </p>
                  </td>
                  <td className='border border-gray-300 text-center'>{rider.workStatus}</td>
                  <td className="text-center flex items-center">
                    <button onClick={() => handleApproval(rider)} className="btn btn-square hover:bg-primary">
                      <SiTicktick />
                    </button>
                    <button onClick={() => handleRejection(rider)} className="btn btn-square hover:bg-primary">
                      <ImCross />
                    </button>
                    <button className="btn btn-square hover:bg-primary">
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