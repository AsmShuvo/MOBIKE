import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaMoneyBillAlt, FaOilCan } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { PiPersonSimpleBike } from "react-icons/pi";

const COunter = () => {
  const [startCounter, setStartCounter] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    onChange: (inView) => {
      if (inView) {
        setStartCounter(true);
      }
    },
  });

  return (
    <div
      ref={ref}
      className="flex gap-2 border items-center justify-evenly py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1)), url(https://images.unsplash.com/photo-1558899447-76e97dc5a3c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-center space-y-2">
        <div className="space-y-2">
          <PiPersonSimpleBike className="text-6xl font-extrabold text-primary text-center mx-auto" />
          <div className="text-5xl text-white text-center font-extrabold">
            {startCounter && <CountUp end={1200} duration={3} />}
          </div>
          <p className="text-lg text-center heading uppercase font-semibold tracking-wider text-white">
            Rental Motorbikes
          </p>
        </div>
      </div>
      <div className="">
        <FaMoneyBillAlt className="text-6xl font-extrabold text-primary text-center mx-auto" />
        <div className="text-5xl text-white text-center font-extrabold">
          {startCounter && <CountUp end={750000} duration={5} />}
        </div>
        <p className="text-lg text-center heading uppercase font-semibold tracking-wider text-white">
          Rental Amounts
        </p>
      </div>
      <div className="">
        <IoIosPeople className="text-6xl font-extrabold text-primary text-center mx-auto" />
        <div className="text-5xl text-white text-center font-extrabold">
          {startCounter && <CountUp end={96} duration={2} />}
        </div>
        <p className="text-lg text-center heading uppercase font-semibold tracking-wider text-white">
          Customer Satisfaction
        </p>
      </div>
      <div className="">
        <FaOilCan className="text-6xl font-extrabold text-primary text-center mx-auto" />
        <div className="text-5xl text-white text-center font-extrabold">
          {startCounter && <CountUp end={3600} duration={4} />}
        </div>
        <p className="text-lg text-center heading uppercase font-semibold tracking-wider text-white">
          Oil changes
        </p>
      </div>
    </div>
  );
};

export default COunter;
