import React, { useState } from 'react';
import useAxios from './../../hooks/useAxios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const axios = useAxios();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [tags, setTags] = useState('');
    const [likes, setLikes] = useState(0);
    const nevigate = useNavigate("/")

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = {
            title,
            author,
            date,
            content,
            image,
            tags: tags.split(',').map(tag => tag.trim()),
            likes
        };
        console.log(newBlog);
        axios.post("/blogs", newBlog)
            .then(data => {
                console.log(data.data)
                if (data.data.insertedId) {
                    Swal.fire("Your Blog Posted Successfully");
                    nevigate("/blogs");
                }
            })
    };

    return (
        <div className='bg-gray-900 py-20 lal' style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1588756681780-9d5859fc2ca0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="max-w-2xl mx-auto p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-md">
                <h2 className="text-2xl text-gray-400 font-semibold mb-6">Create a New Blog</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-300 font-bold mb-2">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-2 bg-gray-600 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 font-bold mb-2">Author</label>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="w-full p-2 bg-gray-600 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 font-bold mb-2">Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full p-2 bg-gray-600 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 font-bold mb-2">Content</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full p-2 bg-gray-600 rounded-md"
                            rows="6"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 font-bold mb-2">Image URL</label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="w-full p-2 bg-gray-600 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300 font-bold mb-2">Tags (comma separated)</label>
                        <input
                            type="text"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            className="w-full p-2 bg-gray-600 rounded-md"
                        />
                    </div>
                    <div className="mb-4 hidden">
                        <label className="block text-gray-300 font-bold mb-2">Likes</label>
                        <input
                            type="number"
                            value={likes}
                            disabled
                            onChange={(e) => setLikes(Number(e.target.value))}
                            className="w-full p-2 bg-gray-600 rounded-md"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Create Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBlog;
