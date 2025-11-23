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
        <div className="overflow-x-auto w-full flex justify-center max-w-4xl py-4">
          <table className="table table-zebra w-auto border border-gray-300 border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 text-center">Sl</th>
                <th className="border border-gray-300 text-center">Name</th>
                <th className="border border-gray-300 text-center">Amount</th>
                <th className="border border-gray-300 text-center">Payment Time</th>
                <th className="border border-gray-300 text-center">Transaction ID</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <th className="border border-gray-300 text-center">{index + 1}</th>
                  <td className="border border-gray-300 text-center">{payment.parcelName}</td>
                  <td className="border border-gray-300 text-center">${payment.amount}</td>
                  <td className="border border-gray-300 text-center">{payment.paidAt}</td>
                  <td className="border border-gray-300 text-center">{payment.transactionId}</td>
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