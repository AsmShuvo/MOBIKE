import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { FaEye } from 'react-icons/fa';
import { PiPersonSimpleWalk } from 'react-icons/pi';
import Swal from 'sweetalert2';

const BikeDetails = () => {
    const { id } = useParams();
    console.log(id);
    const axios = useAxios();
    const { data: bikeDetails, refetch: bikeDetailsRefetch } = useQuery({
        queryKey: ["bikeDetailsQuery"],
        queryFn: async () => {
            const res = await axios.get(`/bike-details/${id}`);
            return res.data;
        }
    })
    console.log(bikeDetails);

    if (!bikeDetails || bikeDetails.length === 0) return <div>Loading...</div>;

    const bike = bikeDetails[0];
    console.log(bike);
    const { model, brand, rent, mileage, owner_name, love, views, image, status } = bike;

    const [alreadyBooked, setAlreadyBooke] = useState(false);
    const handleAddToCart = () => {
        if (status == "booked") return;
        console.log("clicked")
        if (alreadyBooked) {
            Swal.fire("This item is already added to wishlsit by you");
            return;
        }

        const newBike = {
            model,
            brand,
            rent,
            mileage,
            owner_name,
            love,
            views,
            image,
            status,
        }

        axios.post("/cart", newBike)
            .then(data => {
                console.log(data.data);
                console.log(data.data.insertedId);
                if (data.data.insertedId) {
                    Swal.fire("Added to wishlist");
                    console.log("Item added");
                    setAlreadyBooke(true);

                }
            })


    }

    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-gray-100">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src={image || "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"}
                    alt={`${brand} ${model}`}
                />
            </div>
            <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <p className="inline-block plain tracking-wider text-2xl text-primary font-bold uppercase rounded-full bg-teal-accent-400">
                        {brand}
                    </p>
                    <h2 className="mb-5 uppercase heading font-sans text-3xl font-extrabold tracking-widest text-gray-900">
                        {model}
                    </h2>
                    <p className="text-lg font-semibold text-gray-800 mb-4 poppins">BDT {rent}/day</p>
                    <p className="text-gray-700 mb-4 poppins font-semibold">Mileage: {mileage} km</p>
                    <div className="flex items-center gap-4 mb-4">
                        <p className="text-gray-700  border rounded-md px-2 py-1 flex items-center">
                            <svg className="w-6 h-6 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3.172 3.172a4.001 4.001 0 000 5.656L10 15.656l6.828-6.828a4.001 4.001 0 10-5.656-5.656L10 4.343l-1.172-1.17a4.001 4.001 0 00-5.656 0z"></path>
                            </svg>
                            {love}
                        </p>
                        <p className="text-gray-700 flex gap-1 border rounded-md px-2 py-1 items-center">
                            <FaEye />
                            {views}
                        </p>
                    </div>
                    <p className=" mb-8 flex gap-1 items-center font-semibold uppercase poppins text-gray-500"> <PiPersonSimpleWalk /> Owner: {owner_name}</p>
                    <button onClick={handleAddToCart} className="px-4 uppercase plain tracking-wider py-2 bg-blue-600 text-white shadow-md hover:bg-blue-700 focus:shadow-outline focus:outline-none">
                        {status == "booker" ? "BOOKED" : "ADD TO WISHLIST"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BikeDetails;
