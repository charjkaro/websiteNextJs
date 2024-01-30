import React from "react";

const Marquee = () => {
  // Replace with your logos

  return (
    <div className="relative flex overflow-x-hidden text-[#C9F24D] bg-[#1B1B1B]">
      <div className="py-12 animate-marquee whitespace-nowrap">
        <span className="text-4xl mx-4">brand 1</span>
        <span className="text-4xl mx-4">brand 2</span>
        <span className="text-4xl mx-4">brand 3</span>
        <span className="text-4xl mx-4">brand 4</span>
        <span className="text-4xl mx-4">brand 5</span>
        <span className="text-4xl mx-4">brand 1</span>
        <span className="text-4xl mx-4">brand 2</span>
        <span className="text-4xl mx-4">brand 3</span>
        <span className="text-4xl mx-4">brand 4</span>
        <span className="text-4xl mx-4">brand 5</span>
      </div>

      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        <span className="text-4xl mx-4">brand 1</span>
        <span className="text-4xl mx-4">brand 2</span>
        <span className="text-4xl mx-4">brand 3</span>
        <span className="text-4xl mx-4">brand 4</span>
        <span className="text-4xl mx-4">brand 5</span>
        <span className="text-4xl mx-4">brand 1</span>
        <span className="text-4xl mx-4">brand 2</span>
        <span className="text-4xl mx-4">brand 3</span>
        <span className="text-4xl mx-4">brand 4</span>
        <span className="text-4xl mx-4">brand 5</span>
      </div>
    </div>
  );
};

export default Marquee;
