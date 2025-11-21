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
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BeatLoader color="#CAEB66" />
      </div>
    )

  }
  return (
    <div>
      <h2>Please Pay for: {parcel.parcelName}</h2>
      <button className='btn btn-primary text-black'>Pay</button>
    </div>
  );
};

export default Payment;