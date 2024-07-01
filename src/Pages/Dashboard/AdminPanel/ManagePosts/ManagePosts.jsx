import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../../../hooks/useAxios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManagePosts = () => {
    const axios = useAxios()
    const { data: posts, refetch: refetchPosts } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await axios.get("/bikes");
            return res.data;
        },
    })
    console.log(posts);

    const handleDeletePost = (id) => {
        console.log(id);
        axios.delete(`/bikes/${id}`)
            .then(data => {
                Swal.fire({
                    title: "Post Deleted Successfully",
                    timer: 1000,
                    showConfirmButton: false,
                })
                refetchPosts();
            })
            .catch(err => {
                console.log("Err during deleted post:", err);
            })
    }

    return (
        <div className='w-2/3 mt-10 mx-auto pl-6'>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-lg font-medium text-gray-500 uppercase">BIKES ({posts?.length})</th>
                                        <th scope="col" className="px-6 py-3 text-start text-lg font-medium text-gray-500 uppercase">OWNERS EMAIL</th>
                                        <th scope="col" className="px-6 py-3 text-start text-lg font-medium text-gray-500 uppercase">RENT/DAY</th>
                                        <th scope="col" className="px-6 py-3 text-end text-lg font-medium text-gray-500 uppercase">ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        posts?.map(bike => <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
                                            <td className="px-6 py-4 heading whitespace-nowrap text-sm font-medium text-gray-800">{bike.brand} {bike.model}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{bike.owner_email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-900">BDT {bike.rent}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm flex justify-end gap-2 items-center font-medium">
                                                <button onClick={() => handleDeletePost(bike._id)} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                                                <Link to={`/update-post/${bike._id}`}>
                                                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Edit</button></Link>
                                            </td>
                                        </tr>)
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

export default ManagePosts;