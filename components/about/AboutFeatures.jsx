import React from "react";

const AboutFeatures = () => {
  return (
    <div className="lg:p-10 p-5 bg-[#1b1b1b] text-white">
      <h1 className="font-bold lg:text-4xl text-2xl">
        Our Inhouse Printing Setup & Manpower
      </h1>
      <div className="grid lg:grid-cols-2 gap-2 items-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/Features%2F9.png?alt=media&token=1e88b2ac-01f3-4eac-a883-11a780dc1eec"
          alt=""
          className="w-full object-cover rounded-medium lg:px-10 "
        />
        <div className="lg:text-2xl font-semibold ">
          <p>
            Having an in-house printing setup, we would be able to control the
            quality of the materials and ensure that they are produced on time
            and within budget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFeatures;
