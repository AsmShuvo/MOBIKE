import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const Blog = ({ blog, blogRefetch }) => {
    const { _id, title, author, date, content, tags, likes } = blog;
    return (
        <div className='border space-y-4 border-[#18355d] p-4'>
            <p className='text-3xl font-extrabold heading text-gray-50 tracking-wider'>{title}</p>
            <p className='poppins text-gray-300'>{content}</p>
            <div className='flex gap-2'>
                {
                    tags?.map(tag => <p className='px-2 text-white font-semibold py-1 bg-primary rounded-full'>{tag}</p>)
                }
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <p className='w-14 h-14 bg-green-700 font-semibold text-4xl text-white rounded-lg flex justify-center items-center'>{author[0]}</p>
                    <div className="space-y-0 leading-tight">
                        <p className='text-sm text-gray-300'>Author</p>
                        <p className='font-semibold text-gray-50'>{author}</p>
                        <p className='font-semibold text-gray-500'>{date}</p>
                    </div>
                </div>
                <div className='flex gap-2 text-gray-100 px-2  py-1 rounded-sm bg-[#18355d]'>
                    <FaThumbsUp className='text-xl' />
                    <p>{likes}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;