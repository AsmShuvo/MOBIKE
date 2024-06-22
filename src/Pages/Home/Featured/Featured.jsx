import React from "react";
import img from "../../../assets/man/featured.jpg";
import logo from "../../../assets/logo/moto-logo.png";
import feature1 from "../../../assets/logo/machine.png";
import Feature from "./FeatureCard/Feature";
import CountUp from "react-countup";

const Featured = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <img src={logo} className="max-w-sm mb-10 rounded-lg shadow-2xl" />
            <p className="text-primary mb-4 font-bold text-xl heading">
              TAKING RIDES TO A NEWER LEVEL
            </p>
            <h1 className="text-gray-700 font-bolder w-2/3 text-6xl plain">
              GREAT SERVICE THAT MATTERS IN FUTURE
            </h1>
            <p className="py-6 poppins text-gray-600 ">
              Experience the Thrill of the Open Road with Our Premium Bike
              Rentals! Whether you're planning a weekend getaway or an epic
              cross-country adventure, our top-quality motorcycles are ready to
              take you there. With a wide range of models and flexible rental
              options, we cater to all your riding needs. Ride in style, explore
              new horizons, and make unforgettable memories with every journey.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Feature
                img={feature1}
                text="Exercitation ullamco laboris nis exa duis aute irure dolor."
                header="CUTTING EDGE TECH"
              />
              <Feature
                img={feature1}
                text="Exercitation ullamco laboris nis exa duis aute irure dolor."
                header="RADIANCE POLISHING"
              />
              <Feature
                img={feature1}
                text="Exercitation ullamco laboris nis exa duis aute irure dolor."
                header="DISTINCTIVE BEAUTY"
              />
              <Feature
                img={feature1}
                text="Exercitation ullamco laboris nis exa duis aute irure dolor."
                header="PERFECT STYLING"
              />
            </div>
            <button className="btn btn-primary rounded-none text-lg heading ml-1 mt-2 text-white font-semibold ">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
