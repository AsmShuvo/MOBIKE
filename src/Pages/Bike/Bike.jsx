import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const Bike = ({ bike }) => {

    const { _id, model, brand, mileage, rent, owner_name, owner_email, owner_whatsapp, love, views, image } = bike;



    return (
        <div>
            <div className="min-h-screen flex justify-center items-center">
                <div className="max-w-xs container bg-white shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                    <div>
                        <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">BOOK</span>
                        <h1 className="text-2xl mt-1 ml-4 font-bold text-gray-800 heading cursor-pointer hover:text-gray-900 transition uppercase duration-100">{model}</h1>
                        <h1 className="text-lg  ml-4 font-bold text-gray-600 plain tracking-wide cursor-pointer hover:text-gray-900 transition uppercase duration-100">{brand}</h1>
                        <p className="ml-4 hover:underline heading font-semibold text-primary cursor-pointer "> BDT {rent}</p>
                    </div>
                    <img className="w-full cursor-pointer h-80" src={image} alt="" />
                    <div className="flex p-4 justify-between">
                        <div className="flex items-center space-x-2">
                            <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1604636073028-cc7c73f7b335?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sara" />
                            <h2 className="text-gray-800 font-bold cursor-pointer">{owner_name}</h2>
                        </div>
                        <div className="flex space-x-2">
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </span>
                                <span>{views}</span>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                <span>{love}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    );
};

export default Bike;
