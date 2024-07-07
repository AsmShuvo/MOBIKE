import React, { useContext } from 'react';
import useAxios from '../../../../hooks/useAxios';
import { AuthContext } from '../../../../Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import Payment from './../../../Payment/Payment';
import Swal from 'sweetalert2';

const ManageBookings = () => {
    const axios = useAxios();
    const { user } = useContext(AuthContext)
    const { data: payments, refetch } = useQuery({
        queryKey: ["payments"],
        queryFn: async () => {
            const res = await axios.get(`/payments`);
            return res.data;
        }
    });
    console.log("all payments", payments);
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    const handleReturnPayement = (payment) => {
        // not been implemented yet
    }

    const handleDecline = (payment) => {
        payment.statys = "Declined";
        axios.patch(`/payments/${payment._id}/${payment.email}/Declined`, payment)
            .then(data => {
                console.log(data.data);
                if (data.data.modifiedCount) {
                    Swal.fire({
                        title: "Payment Cancelled",
                        timer: 1000
                    });
                    refetch();
                    handleReturnPayement(payment);
                }
            })
    }

    const handleApprove = (payment) => {
        payment.status = "Confirmed";
        axios
            .patch(`/payments/${payment._id}/${payment.email}/Approved`, payment)
            .then((data) => {
                console.log(data.data)
                if (data.data.modifiedCount) {
                    Swal.fire({
                        title: "Approved",
                        timer: 1000,
                    });
                    refetch();
                }
            })
            .catch(err => {
                console.log(err)
            })
    };
    return (

        <div classNameName='w-2/3 mt-4 mx-auto pl-10'>


            <div className="relative w-2/3 mx-auto mt-10 overflow-x-auto rounded">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Customer
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Paid Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                DATE
                            </th>
                            <th scope="col" className="px-6 py-3">
                                status
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments?.map(payment =>

                                <tr key={payment._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {payment.email}
                                    </th>
                                    <td className="px-6 py-4">
                                        {payment.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {formatDate(payment.date)}
                                    </td>
                                    <td className="px-6 py-4">
                                        {payment.status}
                                    </td>
                                    <td className="text-center py-4">
                                        <button onClick={() => handleApprove(payment)} className='btn btn-link mx-1'>Approve</button>
                                        <button onClick={() => handleDecline(payment)} className='btn btn-link mx-1'>Decline</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageBookings;