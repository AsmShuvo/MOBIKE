import React, { useEffect, useState } from 'react';
import useBikes from '../../hooks/useBikes';
import Bike from '../Bike/Bike';
import CoverPage from '../../Components/CoverPage';
import coverImage from "../../assets/covers/bikes-cover.png";
import { RiMotorbikeFill } from 'react-icons/ri';
import ReactPaginate from 'react-paginate';
import "./Bikes.css";

const Bikes = () => {
    const [bikes, bikeRefetch] = useBikes();
    const [currentPage, setCurrentPage] = useState(0);
    const bikesPerPage = 9;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Mobikes | Motorcycles";

        // Simulate loading state
        setLoading(true);
        bikeRefetch().finally(() => setLoading(false));
    }, [bikeRefetch]);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const offset = currentPage * bikesPerPage;
    const currentBikes = bikes.slice(offset, offset + bikesPerPage);
    const pageCount = Math.ceil(bikes.length / bikesPerPage);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-500">Loading...</p>
            </div>
        );
    }

    return (
        <div className='bg-gray-100 pb-6'>
            <CoverPage img={coverImage} heading={"OUR MOTORBIKES"} text={"HOME > MOTORCYCLES"} />
            <marquee className="text-gray-600 bg-white text-lg plain tracking-wide">
                <RiMotorbikeFill className='inline' />
                Welcome to our Bike Collection! Explore the best bikes available for rent.
                Discover a wide range of models from top brands, offering both performance
                and style. Whether you are looking for a road bike, mountain bike, or an
                electric bike, we have something for everyone. Happy riding!
                <RiMotorbikeFill className='inline' />
                <span className='mx-20'></span>
                <RiMotorbikeFill className='inline' />
                Welcome to our Bike Collection! Explore the best bikes available for rent.
                Discover a wide range of models from top brands, offering both performance
                and style. Whether you are looking for a road bike, mountain bike, or an
                electric bike, we have something for everyone. Happy riding!
                <RiMotorbikeFill className='inline' />
            </marquee>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    currentBikes.map(bike => <Bike key={bike.id} bike={bike} />)
                }
            </div>
            <div className='flex justify-center mt-6'>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />
            </div>
        </div>
    );
};

export default Bikes;
