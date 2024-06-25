import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/covers/banner.png";
import img3 from "../../../assets/covers/banner2.png";
import img2 from "../../../assets/covers/banner3.png";
import img4 from "../../../assets/covers/banner4.png";
import { SlCallEnd } from "react-icons/sl";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[580px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  flex flex-col left-0 top-0 gap-4">
            <div className="space-y-7 pl-16 mt-16">
              <h1 className="text-7xl tracking-wider heading w-1/2 uppercase text-gray-200 font-bold">
                Premium motorcycle rental
              </h1>
              <p className="text-lg w-1/2 poppins text-gray-200">
                Discover top-quality bikes for your ultimate riding experience.
                Enjoy flexible rental options tailored to your adventure needs.
                Whether you're a seasoned rider or a novice, we have the perfect
                bike for you.
              </p>
              <div className="flex flex-col md:flex-row gap-2">
                <Link
                  to="/register"
                  class="group relative inline-flex items-center overflow-hidden rounded bg-primary px-8 py-3 text-white focus:outline-none focus:ring active:bg-primary"
                >
                  <span class="absolute -start-full transition-all group-hover:start-4">
                    <svg
                      class="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span class=" heading text-xl font-semibold transition-all group-hover:ms-4">
                    GET STARTED
                  </span>
                </Link>
                <Link
                  class="group relative inline-flex items-center overflow-hidden rounded px-8 py-3 text-white focus:outline-none focus:ring "
                  to="/latest"
                >
                  <span class="absolute -end-full transition-all group-hover:end-4">
                    <svg
                      class="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span class="heading text-xl font-semibold transition-all group-hover:me-4 flex gap-1 items-center">
                    {" "}
                    <SlCallEnd /> CONTACT US{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  flex flex-col left-0 top-0 gap-4">
            <div className="space-y-7 pl-16 mt-16">
              <h1 className="text-7xl tracking-wider heading w-1/2 uppercase text-gray-200 font-bold">
                Explore Uncharted Roads
              </h1>
              <p className="text-lg w-1/2 poppins text-gray-200">
                Venture beyond the ordinary with our reliable motorcycles. Chart
                your own course and create unforgettable memories. Embark on
                journeys to scenic routes and hidden gems.
              </p>
              <div className="flex flex-col md:flex-row gap-2">
                <Link
                  to="/register"
                  class="group relative inline-flex items-center overflow-hidden rounded bg-primary px-8 py-3 text-white focus:outline-none focus:ring active:bg-primary"
                >
                  <span class="absolute -start-full transition-all group-hover:start-4">
                    <svg
                      class="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span class="heading text-xl font-semibold transition-all group-hover:ms-4">
                    GET STARTED
                  </span>
                </Link>
                <Link
                  class="group relative inline-flex items-center overflow-hidden rounded px-8 py-3 text-gray-200 focus:outline-none focus:ring "
                  to="/latest"
                >
                  <span class="absolute -end-full transition-all group-hover:end-4">
                    <svg
                      class="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span class=" heading text-xl font-semibold transition-all group-hover:me-4 flex gap-1 items-center">
                    {" "}
                    <SlCallEnd /> CONTACT US{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  flex flex-col left-0 top-0 gap-4">
            <div className="space-y-7 pl-16 mt-16">
              <h1 className="text-7xl tracking-wider heading w-1/2 text-gray-200 uppercase font-bold">
                Unleash the Adventurer in You
              </h1>
              <p className="text-lg w-1/2 poppins text-gray-200">
                Embrace the thrill of the open road with our premium rentals.
                Experience freedom like never before with every ride. Push your
                boundaries and explore new horizons confidently.
              </p>
              <div className="flex flex-col md:flex-row gap-2">
                <Link
                  to="/register"
                  class="group relative inline-flex items-center overflow-hidden rounded bg-primary px-8 py-3 text-gray-200 focus:outline-none focus:ring active:bg-primary"
                >
                  <span class="absolute -start-full transition-all group-hover:start-4">
                    <svg
                      class="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span class=" heading text-xl font-semibold transition-all group-hover:ms-4">
                    GET STARTED
                  </span>
                </Link>
                <Link
                  class="group relative inline-flex items-center overflow-hidden rounded px-8 py-3 text-white focus:outline-none focus:ring "
                  to="/latest"
                >
                  <span class="absolute -end-full transition-all group-hover:end-4">
                    <svg
                      class="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span class="heading text-xl font-semibold transition-all group-hover:me-4 flex gap-1 items-center">
                    {" "}
                    <SlCallEnd /> CONTACT US{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  flex flex-col left-0 top-0 gap-4">
            <div className="space-y-7 pl-16 mt-16">
              <h1 className="text-7xl tracking-wider heading uppercase w-1/2 text-gray-200 font-bold">
                Ride with Confidence and Style
              </h1>
              <p className="text-lg w-1/2 poppins text-gray-200">
                Feel secure with our well-maintained and stylish bikes. Make a
                statement wherever you go with our sleek rentals. Ride assured,
                knowing you're on a top-notch machine designed for performance
                and elegance.
              </p>
              <div className="flex flex-col md:flex-row gap-2">
                <Link
                  to="/register"
                  class="group relative inline-flex items-center overflow-hidden rounded bg-primary px-8 py-3 text-white focus:outline-none focus:ring active:bg-primary"
                >
                  <span class="absolute -start-full transition-all group-hover:start-4">
                    <svg
                      class="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span class="text-sm font-medium heading text-xl font-semibold transition-all group-hover:ms-4">
                    GET STARTED
                  </span>
                </Link>
                <Link
                  class="group relative inline-flex items-center overflow-hidden rounded px-8 py-3 text-white focus:outline-none focus:ring "
                  to="/latest"
                >
                  <span class="absolute -end-full transition-all group-hover:end-4">
                    <svg
                      class="size-5 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span class="text-sm font-medium heading text-xl font-semibold transition-all group-hover:me-4 flex gap-1 items-center">
                    {" "}
                    <SlCallEnd /> CONTACT US{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
