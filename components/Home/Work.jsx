/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CarouselControlsOutside from "../common/Carousel";

const Work = () => {
  return (
    <div>
      <div className="p-20 flex items-center justify-between">
        <h1 className="text-6xl p-2 font-bold">Our Recent Work</h1>
        <p className="w-1/3 text-right ">
          We're not just talkers, we're walkers. We'll show you how our kickass
          work can help you grow your business
        </p>
      </div>
      <div className="flex justify-center">
        <div className="bg-[#C9F24D] p-10 w-4/5 rounded-xl">
          <CarouselControlsOutside />
        </div>
      </div>
      <div className="">
        <h1 className="font-bold text-5xl my-10 text-center py-2">
          Our Track Record Of Success
        </h1>
        <div className="flex justify-between  px-20 gap-5">
          <Stats
            count="528%"
            title="Increase in organic visitors in 6 months"
          />
          <Stats
            count="10+"
            title="Years Of Experience"
          />
          <Stats
            count="500+"
            title="Projects Delivered"
          />
          <Stats
            count="85%"
            title="Customer Satisfaction Rate"
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
        <p className="text-lg font-light text-gray-500">{title}</p>
      </div>
    </div>
  );
}
