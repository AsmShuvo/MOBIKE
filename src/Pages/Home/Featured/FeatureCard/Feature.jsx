import React from "react";

const Feature = ({ img, header, text }) => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <div>
          <img src={img} className=" h-16 w-20 rounded-full bg-gray-100 p-2" />
        </div>
        <div>
          <h4 className="text-2xl my-2 font-bold text-gray-700 heading">
            {header}
          </h4>
          <h4 className="my-2 poppins text-gray-600">{text}</h4>
        </div>
      </div>
    </div>
  );
};

export default Feature;
