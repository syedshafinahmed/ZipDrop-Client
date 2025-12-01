import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Assignparcels = () => {
  const [selectedParcel, setSelectedParcel] = useState(null);
  const riderModalRef = useRef();
  const axiosSecure = useAxiosSecure();


  const { data: parcels = [], refetch: parcelRefetch } = useQuery({
    queryKey: ['parcels', 'pending-pickup'],
    queryFn: async () => {
      const res = await axiosSecure.get('/parcels?deliveryStatus=pending-pickup')
      return res.data;

    }
  })


  const { data: riders = [] } = useQuery({
    queryKey: ['riders', selectedParcel?.senderDistrict, 'available'],
    enabled: !!selectedParcel,
    queryFn: async () => {
      const res = await axiosSecure.get(`riders?status=approved&district=${selectedParcel?.senderDistrict}&workStatus=available`)
      return res.data;
    }
  })



  const openAssignRiderModal = (parcel) => {
    setSelectedParcel(parcel);
    console.log(parcel.senderDistrict);
    riderModalRef.current.showModal();
  }

  const handleAssignRider = (rider) => {
    const riderAssignInfo = {
      riderId: rider._id,
      riderEmail: rider.email,
      riderName: rider.name,
      parcelId: setSelectedParcel._id
    }
    axiosSecure.patch(`/parcels/${selectedParcel._id}`, riderAssignInfo)
      .then(res => {
        if (res.data.modifiedCount) {
          riderModalRef.current.close();
          parcelRefetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${rider.name} has been assigned`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

  return (
    <div>
      <h2 className='text-3xl md:text-5xl text-center py-2'>Assign Riders: {parcels.length}</h2>
      <div className="flex justify-center">
        <div className="overflow-x-auto w-full flex justify-center max-w-4xl py-4">
          <table className="table table-zebra w-auto border border-gray-300 border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 text-center">Sl</th>
                <th className="border border-gray-300 text-center wrap-break-word whitespace-normal">Name</th>
                <th className="border border-gray-300 text-center">Type</th>
                <th className="border border-gray-300 text-center">Cost</th>
                <th className="border border-gray-300 text-center">Tracking Id</th>
                <th className="border border-gray-300 text-center">Pickup District</th>
                <th className="border border-gray-300 text-center">Delivery District</th>
                <th className="border border-gray-300 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {parcels.map((parcel, index) => (
                <tr key={parcel._id}>
                  <th className="border border-gray-300 text-center">{index + 1}</th>
                  <td className="border border-gray-300 text-center wrap-break-word whitespace-normal">{parcel.parcelName}</td>
                  <td className="border border-gray-300 text-center">{parcel.parcelType}</td>
                  <td className="border border-gray-300 text-center">{parcel.cost}</td>
                  <td className="border border-gray-300 text-center">{parcel.trackingId}</td>
                  <td className="border border-gray-300 text-center">{parcel.senderDistrict}</td>
                  <td className="border border-gray-300 text-center">{parcel.receiverDistrict}</td>
                  <td className="border border-gray-300 text-center">
                    <button onClick={() => openAssignRiderModal(parcel)} className='btn btn-primary text-xs border-none text-black'>Find Rider</button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <dialog ref={riderModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full max-w-2xl">
          <h3 className="font-bold text-lg">Riders: {riders.length}</h3>
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
                    <th className='text-center border border-gray-300'>Email</th>
                    <th className='text-center border border-gray-300'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {riders.map((rider, index) => <tr key={index}>
                    <td className='text-center border border-gray-300'>
                      {index + 1}
                    </td>
                    <td className='text-center border border-gray-300'>
                      {rider.name}
                    </td>
                    <td className='text-center border border-gray-300'>
                      {rider.email}
                    </td>
                    <td className='text-center border border-gray-300'>
                      <button onClick={() => handleAssignRider(rider)} className='btn btn-xs btn-primary text-black'>Assign</button>
                    </td>
                  </tr>)}
                </tbody>

              </table>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Assignparcels;