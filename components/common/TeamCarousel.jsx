"use client";

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { SalesTeam } from "@/Data/TeamData";
import Image from "next/image";

export default function TeamCarouselLogo() {
  useEffect(() => {
    const slider = new Glide(".glide-099", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 4.8,
      hoverpause: true,
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
          perView: 1,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-099 relative w-full">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <PersonCard
              image="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/31a79262-05ac-4c6e-979d-5a7572e7d49b%20(1).png?alt=media&token=66de948d-1736-470a-9208-3203ab25ebe9"
              name="Raghu Khanna"
              title="Founder / MD"
            />
            <PersonCard
              image="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/vp%20cud.png?alt=media&token=6ff87550-1f23-4548-9b1a-69f688f0ba0e"
              name="Nitesh Nagpal"
              title="Vice president"
            />
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  );

  function PersonCard({ image, name, title }) {
    return (
      <li>
        <div className="h-56 w-44 bg-gray-500">
          <Image
            width={240}
            height={288}
            src={image}
            alt={name}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <h1 className="my-2 text-xl font-bold">{name}</h1>
        <h1 className="text-gray-500">{title}</h1>
      </li>
    );
  }
}
