import { useQuery } from '@tanstack/react-query';
import React, { useRef } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Assignparcels = () => {
  const riderModalRef = useRef();
  const axiosSecure = useAxiosSecure();
  const openAssignRiderModal = parcel => {
    riderModalRef.current.showModal();
  }
  const { data: parcels = [] } = useQuery({
    queryKey: ['parcels', 'pending-pickup'],
    queryFn: async () => {
      const res = await axiosSecure.get('/parcels?deliveryStatus=pending-pickup')
      return res.data;

    }
  })
  return (
    <div>
      <h2 className='text-3xl md:text-5xl text-center py-2'>Assign parcels: {parcels.length}</h2>
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
                    <button onClick={() => openAssignRiderModal(parcel)} className='btn btn-primary text-xs border-none text-black'>Assign Rider</button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <dialog ref={riderModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
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