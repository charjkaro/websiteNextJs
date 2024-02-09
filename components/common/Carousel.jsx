"use client";

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { Button } from "@nextui-org/react";
import { WorkData } from "@/Data/Work";
import Image from "next/image";

export default function CarouselControlsOutside() {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 1,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 1,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-04 relative w-full">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden py-5 text-gray-500">
            {WorkData.slice(0, 5).map((item, index) => {
              return (
                <div key={index} className="">
                  <CarouselSlide
                    img={item.img}
                    description={item.description}
                    client={item.title}
                  />
                </div>
              );
            })}
            {/*             
            <CarouselSlide />
            <CarouselSlide />
            <CarouselSlide /> */}
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="flex w-full items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with controls outside --> */}
    </>
  );
}

function CarouselSlide({ client, description, img }) {
  return (
    <li>
      {/* <img
     src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-01.jpg"
     className="m-auto max-h-full w-full max-w-full"
    /> */}
      <div className=" w-full h-fit  ">
        <div className="flex flex-col-reverse items-center lg:flex-row  justify-between">
          <div className="flex flex-col lg:py-10 p-5 gap-4 justify-evenly lg:w-1/2">
            <h1 className="font-bold text-4xl p-2">{client}</h1>
            <p className="font-bold text-lg">{description}</p>
            {/* <p>
              Retail Hub is an incubator for D2C brands. With the right
              resources and expertise, Retail Hub develops brands into Digitally
              Native Vertical Brands (DNVB), enabling them with superior
              warehousing, digital marketing, and e-commerce infrastructure to
              reach their full potential.
            </p> */}
            <a href="/work">
              <Button className="max-w-fit bg-black text-white rounded-none shadow-sm">
                Find out More
              </Button>
            </a>
          </div>
          <div className="flex items-center">
            <div className="lg:w-96 lg:h-96 w-64 h-64 bg-black overflow-hidden  rounded-full">
              <Image
                width={500}
                height={500}
                src={img}
                alt={client}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
