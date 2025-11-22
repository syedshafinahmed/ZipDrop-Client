import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  const [paymentInfo, setPaymentInfo] = useState({});

  const axiosSecure = useAxiosSecure();
  console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
        .then(res => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId
          })
        })
    }
  }, [sessionId, axiosSecure])
  return (
    <div>
      <h2 className='text-4xl font-bold text-primary'>Payment Successfull</h2>
      <p>Your Transaction Id: {paymentInfo.transactionId}</p>
      <p>Your Tracking Id: {paymentInfo.trackingId}</p>
    </div>
  );
};

export default PaymentSuccess;