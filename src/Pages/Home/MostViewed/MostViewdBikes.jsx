import React from 'react';
import { FaHeart, FaRegEye } from 'react-icons/fa';

const MostViewdBikes = ({ bike }) => {
    return (
        <div>
            <div className="relative bg-white w-fit shadow-lg overflow-hidden">
                <img
                    src={bike.image}
                    alt={bike.model}
                    className="w-72 h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 rounded-sm bg-[#3C3D3E] bg-opacity-90 p-4 transition duration-500">
                    <div className="text-white">
                        <h2 className="text-2xl font-bold heading uppercase">
                            {bike.model}
                        </h2>
                        <div className='flex items-center justify-between'>
                            <p className="text-primary text-lg font-semibold plain tracking-widest">
                                ৳ {bike.rent}<span className='text-white font-light text-sm'>/DAY</span>
                            </p><p className=" text-xl font-bold heading uppercase flex items-center gap-1">
                                <FaHeart /> {bike.love}
                            </p>
                        </div>
                        {/* <p className="text-gray-300 text-lg font-semibold plain tracking-wider">MILEAGE: {bike.mileage}KMPL</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostViewdBikes;