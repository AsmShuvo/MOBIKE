import React from 'react';
import SectionHeading from '../../../Components/SectionHeading';
import useBikes from '../../../hooks/useBikes';
import MostViewdBikes from './MostViewdBikes';
import { Link } from 'react-router-dom';
import { FaRegEye } from 'react-icons/fa';

const MostViewed = () => {
    const [bikes, bikeRefetch] = useBikes();
    // console.log(bikes)
    const sortedBikes = [...bikes].sort((a, b) => b.love - a.love);
    const highestLovedBike = sortedBikes[0];
    // console.log(highestLovedBike);
    const mostPopularBikes = sortedBikes?.slice(1, 5);
    // console.log(mostPopularBikes?.length);
    return (
        <div className='py-10 bg-blue-50 px-24'>
            <div className='flex justify-around items-center'>
                <SectionHeading subHeading={"PEOPLE LOVE THE MOST"} heading={"FEATURED RENT MOTORCYCLE"} />
                <Link to="/bikes"><button className='bg-primary py-2 w-44 h-16 text-white font-bold heading rounded-none'>VIEW ALL BIKES</button></Link>
            </div>
            <div className='flex items-center my-10 justify-evenly'>
                <div>
                    <div className="relative bg-white w-fit shadow-lg overflow-hidden">
                        <img
                            src={highestLovedBike?.image}
                            alt={highestLovedBike?.model}
                            className="w-[500px] h-[535px] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 rounded-sm bg-[#3C3D3E] opacity-90 p-4 transition duration-500">
                            <div className="text-white">
                                <h2 className="text-2xl font-bold heading uppercase">
                                    {highestLovedBike?.model}
                                </h2>

                                <div className='flex justify-between items-center'>
                                    <p className="text-primary text-xl font-semibold plain tracking-widest">
                                        ৳ {highestLovedBike?.rent}<span className='text-sm font-light text-white'>/DAY</span>
                                    </p>
                                    <p className=" text-xl font-bold heading uppercase flex items-center gap-1">
                                        <FaRegEye /> {highestLovedBike?.love}
                                    </p>
                                </div>
                                {/* <p className="text-gray-300 text-lg font-semibold plain tracking-wider">MILEAGE: {highestLovedBike.mileage}KMPL</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    {
                        mostPopularBikes?.map(bike => <MostViewdBikes bike={bike} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default MostViewed;