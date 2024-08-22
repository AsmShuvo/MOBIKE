import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { Link } from "react-router-dom";
import { useAdmin } from "../../../../hooks/useAdmin";

const PaymentHistory = () => {
    const axios = useAxios();
    const { user } = useContext(AuthContext);
    console.log(user?.email);
    const { isAdmin } = useAdmin();
    console.log(isAdmin);
    const { data: payments = [], refetch: refetchPayment } = useQuery({
        queryKey: ["myPayments"],
        queryFn: async () => {
            const res = await axios.get(`/payments/${user?.email}`);
            return res.data;

        }
    });
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    console.log("payment history: ", payments);

    return (
        <div className="w-2/3 mx-auto">
            <h1 className="text-4xl text-center">Payments Made : {payments?.length}</h1>
            <div className="flex flex-col ml-10">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-gray-500 uppercase dark:text-neutral-500">Bike Model</th>
                                        <th scope="col" className="px-6 py-3 text-start text-gray-500 uppercase dark:text-neutral-500">Total Price</th>
                                        <th scope="col" className="px-6 py-3 text-start text-gray-500 uppercase dark:text-neutral-500">Date</th>
                                        <th scope="col" className="px-6 py-3 text-start text-gray-500 uppercase dark:text-neutral-500">Status</th>
                                        <th scope="col" className="px-6 py-3 text-end text-gray-500 uppercase dark:text-neutral-500">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    {
                                        payments?.map(payment => (
                                            <tr key={payment.id}>
                                                <td className="px-6 py-4 whitespace-nowrap poppins text-sm font-medium text-gray-800">
                                                    {payment.bikeModels?.map(item => <p key={item}>{item}</p>)}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">BDT {payment.price}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{formatDate(payment.date)}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">{payment.status}</td>
                                                <td className="px-6 justify-end py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    {payment.status == "Approved" && <Link to="/create-blog" type="button" className=" block items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent btn-link text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Post a blog</Link>}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;