"use client";

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

const StaticWork = () => {
  useEffect(() => {
    const slider = new Glide(".glide-100", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 10000,
      animationTimingFunc: "linear",
      perView: 5,
      hoverpause: true,
      rewind: "true",
      focusAt: "center",

      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1.2,
          gap: 2,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  return (
    <div className="relative mb-10 ml-5 mt-10 overflow-hidden rounded-l-full ">
      <div className=" absolute top-0 z-30 flex h-72 w-72 items-center justify-center  rounded-full bg-primary duration-250 hover:rotate-6  hover:bg-black ">
        <h1 className="text-center text-5xl text-white ">Our recent Work</h1>
      </div>
      <div className="glide-100 relative h-72 w-[103vw]    py-2 text-primary">
        {/* <!-- Slides --> */}
        <div data-glide-el="track" className="">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full items-center overflow-hidden p-5">
            <li className="h-64 w-full bg-[url('https://placehold.co/600x400?text=Service+image')] bg-cover bg-center "></li>
            <li className="h-64 w-full bg-[url('https://placehold.co/600x400?text=Service+image')] bg-cover bg-center "></li>
            <li className="h-64 w-full bg-[url('https://placehold.co/600x400?text=Service+image')] bg-cover bg-center "></li>
            <li className="h-64 w-full bg-[url('https://placehold.co/600x400?text=Service+image')] bg-cover bg-center "></li>

            {/* <li className="text-3xl font-bold">
            We are experts in crafting dynamic and engaging outdoor advertising
            solutions that ensure your brand stands out.
          </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StaticWork;
