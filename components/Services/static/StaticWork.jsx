"use client";

import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
const Case = () => {
  const glideRef = useRef(null);

  useEffect(() => {
    const slider = new Glide(".glide-100", {
      type: "carousel",
      autoplay: false, // Disable autoplay
      animationDuration: 100,
      animationTimingFunc: "linear",
      perView: 3,
      hoverpause: true,
      rewind: true,
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

    glideRef.current = slider; // Store the slider instance in a ref

    return () => {
      slider.destroy();
    };
  }, []);

  const goToNextSlide = () => {
    glideRef.current.go(">");
  };

  const goToPrevSlide = () => {
    glideRef.current.go("<");
  };
  return (
    <div className=" overflow-hidden  p-10">
      <div className="font-outline-2  hover:font-outline-4 text-8xl font-bold text-transparent">
        Our Case Studies
      </div>
      <div className="max-w-screen mt-10 flex justify-between">
        <button
          className="rounded-full bg-white p-1 duration-250 hover:invert"
          onClick={goToPrevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={50}
            viewBox="0 -960 960 960"
            width={50}
          >
            <path d="m480-357 19-19-90-90h205v-28H409l90-90-19-19-123 123zm.174 225Q408-132 344.442-159.391q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435T132-479.826t27.391-135.732q27.392-63.559 74.348-110.574t110.435-74.442Q407.652-828 479.826-828t135.732 27.391q63.559 27.392 110.574 74.348t74.442 110.435Q828-552.348 828-480.174t-27.391 135.732q-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441T480.174-132M480-160q134 0 227-93t93-227-93-227-227-93-227 93-93 227 93 227 227 93m0-320" />
          </svg>
        </button>
        <button
          className="rounded-full bg-white p-1 duration-250 hover:invert"
          onClick={goToNextSlide}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={50}
            viewBox="0 -960 960 960"
            width={50}
          >
            <path d="m480-357 123-123-123-123-19 19 90 90H346v28h205l-90 90zm.174 225Q408-132 344.442-159.391q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435T132-479.826t27.391-135.732q27.392-63.559 74.348-110.574t110.435-74.442Q407.652-828 479.826-828t135.732 27.391q63.559 27.392 110.574 74.348t74.442 110.435Q828-552.348 828-480.174t-27.391 135.732q-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441T480.174-132M480-160q134 0 227-93t93-227-93-227-227-93-227 93-93 227 93 227 227 93m0-320" />
          </svg>
        </button>
      </div>
      <div className="glide-100 relative    py-2 text-primary">
        {/* <!-- Slides --> */}
        <div data-glide-el="track" className="">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full items-center overflow-hidden p-5">
            <li className="h-96 w-full bg-[url('https://placehold.co/600x400?text=Service+image')] bg-cover bg-center  "></li>
            <li className="h-96 w-full bg-[url('https://placehold.co/600x400?text=Service+image')] bg-cover bg-center "></li>
            <li className="h-96 w-full bg-[url('https://placehold.co/600x400?text=Service+image')] bg-cover bg-center "></li>
            <li className="h-96 w-full bg-[url('https://placehold.co/600x400?text=Service+image')] bg-cover bg-center "></li>

            {/* <li className="text-3xl font-bold">
            We are experts in crafting dynamic and engaging outdoor advertising
            solutions that ensure your brand stands out.
          </li> */}
          </ul>
          <div className="flex justify-center"> </div>
        </div>
      </div>
    </div>
  );
};

export default Case;
