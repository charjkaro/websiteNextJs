import React from "react";

const GreenServices = () => {
  return (
    <div>
      <div className="lg:p-10">
        <h1 className="text-center text-4xl font-bold ">
          Our Sustainable Advertising solutions
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-[1px] px-20 hover:invert">
        <div className="h-96 w-full  bg-[#1b1b1b] text-white transition-colors duration-300 hover:invert">
          Electric Bus Branding
        </div>
        <div className="h-96 w-full  bg-[#1b1b1b] text-white transition-colors duration-300    hover:invert">
          EV Charging Station Branding
        </div>
      </div>
    </div>
  );
};

export default GreenServices;
