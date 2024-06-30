import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxios from './../../hooks/useAxios';
import CoverPage from '../../Components/CoverPage';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const axios = useAxios();
    const { data: blogs, refetch: blogRefetch } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const result = await axios.get("/blogs")
            return result.data;
        }
    })
    console.log("blogs", blogs);
    return (
        <div className='bg-[#1F2937] '>
            <CoverPage heading={"BLOGS OF CUSTOMERS"} text={"HOME>BLOGS"} img={"https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <div className='grid grid-cols-2 gap-4 py-10 px-16'>
                {
                    blogs?.map(blog => <Blog blog={blog} blogRefetch={blogRefetch} />)
                }
            </div>

        </div>
    );
};

export default Blogs;