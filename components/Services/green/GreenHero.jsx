import React from "react";

const GreenHero = () => {
  return (
    <div className="relative z-50 flex items-center justify-between px-10 pb-10">
      <div className="lg:max-w-xl">
        <h1 className="z-40 text-5xl font-bold text-gray-900 ">
          Embrace Sustainability: Your Path to a Greener Tomorrow
        </h1>
        <p className="text-lg text-gray-700">
          Discover how our innovative green advertising solutions can make a
          difference in your business and the planet.
        </p>
        <div className="">
          <button className="mt-4 rounded-3xl border-3 border-green-600  p-3  text-lg">
            Explore Our Solutions
          </button>
        </div>
      </div>
      <div className="h-96 w-96 bg-black"></div>
    </div>
  );
};

export default GreenHero;
