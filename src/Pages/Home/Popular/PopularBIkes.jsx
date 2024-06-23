import React from "react";
import useBikes from "../../../hooks/useBikes";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import SectionHeading from "../../../Components/SectionHeading";

const PopularBikes = () => {
  const [bikes] = useBikes();

  return (
    <div className="p-4 bg-black">
      <SectionHeading heading={"TAKING RIDES TO A NEWER LEVEL"} subHeading={"Exploring New Horizons in Mobility"} text="Discover the latest in urban mobility with our curated selection of popular bikes. From sleek designs to powerful performance, find your perfect ride and elevate your journey today." />
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000 }}
        effect="coverflow"
        grabCursor
        zoom
      >
        {bikes.map((bike, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-white w-fit shadow-lg overflow-hidden">
              <img
                src={bike.image}
                alt={bike.model}
                className="w-96 h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 w-fit rounded-sm bg-gray-500 bg-opacity-0 hover:bg-opacity-50 p-4 transition duration-500">
                <div className="text-white">
                  <h2 className="text-2xl font-bold heading uppercase">
                    {bike.model}
                  </h2>
                  <p className=" text-xl font-bold heading uppercase">
                    {bike.brand}
                  </p>
                  <p className="text-gray-300 text-lg font-semibold plain tracking-wider">
                    Rent: BDT {bike.rent}/DAY
                  </p>
                  <p className="text-gray-300 text-lg font-semibold plain tracking-wider">MILEAGE: {bike.mileage}KMPL</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="texy-center flex items-center justify-center mt-5"><button className="btn w-36 bg-primary text-white heading font-bold rounded-none border-none outline-none mx-auto text-center">SEE MORE</button></div>
    </div>
  );
};

export default PopularBikes;
