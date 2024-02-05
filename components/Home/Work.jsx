/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CarouselControlsOutside from "../common/Carousel";

const Work = () => {
  return (
    <div>
      <div className="lg:p-20 p-5 lg:flex items-center justify-between">
        <h1 className="lg:text-6xl text-5xl p-2 font-bold">Our Recent Work</h1>
        <p className="lg:w-1/3 lg:text-right ">
          We're not just talkers, we're walkers. We'll show you how our kickass
          work can help you grow your business
        </p>
      </div>
      <div className="lg:flex justify-center">
        <div className="bg-[#C9F24D] lg:p-10 lg:w-4/5 rounded-xl">
          <CarouselControlsOutside />
        </div>
      </div>
      <div className="">
        <h1 className="font-bold text-5xl my-10 text-center py-2">
          Our Track Record Of Success
        </h1>
        <div className="flex lg:justify-between justify-center p-5 flex-wrap   lg:px-20 gap-5">
          <Stats
            count="10000+"
            title="CAR WRAPS"
          />
          <Stats
            count="10M"
            title="VINYL PRINTING"
          />
          <Stats
            count="10K+"
            title="CAMPAIGNS"
          />
          <Stats
            count="8000+"
            title="CLIENTS SERVED"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
function Stats({ count, title }) {
  return (
    <div className="">
      <div className="w-fit flex-col justify-center items-center text-center">
        <h1 className="font-bold text-4xl p-2">{count}</h1>
        <p className="text-lg font-light text-gray-500 max-w-sm">{title}</p>
      </div>
    </div>
  );
}
