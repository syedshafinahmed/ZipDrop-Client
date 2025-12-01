import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcels = () => {

  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ['my-parcels', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    }
  })

  const handleParcelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#03373D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/parcels/${id}`)
          .then(res => {
            // console.log(res.data);
            if (res.data.deletedCount) {
              // refresh data in UI
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your parcel request has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }

  const handlePayment = async (parcel) => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,

    }
    const res = await axiosSecure.post('/payment-checkout-session', paymentInfo)
    window.location.assign(res.data.url);
  }

  return (
    <div>
      <h2 className='text-5xl text-center py-2'>My Parcels: {parcels.length}</h2>
      <div className="w-full py-4 flex justify-center">
        <table className="table table-zebra w-auto border border-gray-300 border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 text-center">Sl</th>
              <th className="border border-gray-300 text-center">Name</th>
              <th className="border border-gray-300 text-center">Cost</th>
              <th className="border border-gray-300 text-center">Payment Status</th>
              <th className="border border-gray-300 text-center">Tracking Id</th>
              <th className="border border-gray-300 text-center">Delivery Status</th>
              <th className="border border-gray-300 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th className="border border-gray-300 text-center">{index + 1}</th>
                <td className="border border-gray-300 text-center">{parcel.parcelName}</td>
                <td className="border border-gray-300 text-center">{parcel.cost}</td>
                <td className="border border-gray-300 text-center">
                  {
                    parcel.paymentStatus === 'paid' ? <span className='badge badge-success'>Paid</span> :
                      // <Link to={`/dashboard/payment/${parcel._id}`} className='btn btn-primary text-black btn-sm'><button>Pay</button></Link>
                      <button onClick={() => handlePayment(parcel)} className='btn btn-primary text-black btn-sm'>Pay</button>
                  }
                </td>
                <td className="border border-gray-300 text-center">{parcel.trackingId}</td>
                <td className="border border-gray-300 text-center">{parcel.deliveryStatus}</td>
                <td className="border border-gray-300 text-center">
                  <button className="btn btn-square hover:bg-primary">
                    <FaEdit />
                  </button>
                  <button className="btn btn-square mx-2 hover:bg-primary">
                    <FaMagnifyingGlass />
                  </button>
                  <button onClick={() => handleParcelDelete(parcel._id)} className="btn btn-square hover:bg-primary">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


  );
};

export default MyParcels;