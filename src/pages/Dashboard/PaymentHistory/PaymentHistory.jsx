import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentHistory = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`payments?email=${user.email}`)
      return res.data;
    }
  })
  return (
    <div>
      <h2 className='text-5xl text-center py-2'>Payment History: {payments.length}</h2>

      <div className="flex justify-center">
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="table table-zebra mt-10">
            <thead>
              <tr>
                <th>Sl</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Transaction ID</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>
                  <td>{payment.parcelName}</td>
                  <td>${payment.amount}</td>
                  <td>{payment.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;