import React from "react";
import logo from "../assets/logo/moto-logo.png";
const SectionHeading = ({ heading, subHeading, text }) => {
  return (
    <div className="mt-20 mb-8 p-4 flex justify-center items-center">
      <div className=" space-y-2">
        <img src={logo} className="h-10 w-20 mx-auto" />
        <h3 className="text-xl text-primary text-center heading font-bold">{subHeading}</h3>
        <h3 className="text-5xl text-gray-800 text-center heading font-extrabold">{heading}</h3></div>
    </div>
  );
};

export default SectionHeading;
