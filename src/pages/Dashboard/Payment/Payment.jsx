import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { BeatLoader } from 'react-spinners';

const Payment = () => {
  const { parcelId } = useParams();

  const axiosSecure = useAxiosSecure();

  const { data: parcel, isLoading } = useQuery({
    queryKey: ['parcels', parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    }
  })
  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName
    }

    const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BeatLoader color="#CAEB66" />
      </div>
    )

  }
  return (
    <div>
      <h2>Please Pay ${parcel.cost} for: {parcel.parcelName}</h2>
      <button onClick={handlePayment} className='btn btn-primary text-black'>Pay</button>
    </div>
  );
};

export default Payment;