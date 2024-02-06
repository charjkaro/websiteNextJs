import React from "react";
import Navbar from "./Navbar";

export function MeteorsDemo() {
  return (
    <div className="w-screen lg:h-screen h-96 bg-black relative overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/790362069?autoplay=1&loop=1&background=1&app_id=122963"
        className="absolute top-0 left-0 w-full h-full object-cover border-3 border-white scale-[175%] lg:scale-125"
        allow="autoplay; fullscreen; picture-in-picture"
        title="MarketingABetterFuture_Final.mp4"
        data-ready="true"
      ></iframe>
      <div className="absolute top-0 left-0 w-full  ">
        <Navbar />
      </div>
    </div>
  );
}
