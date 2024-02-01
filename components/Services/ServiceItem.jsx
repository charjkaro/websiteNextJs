import { Button } from "@nextui-org/react";
import React, { useEffect } from "react";

const ServiceItem = () => {
  return (
    <div className="text-white px-10 h-[80vh] p-2 md:flex gap-10 ">
      <div className="bg-blue-400 lg:w-2/5  rounded-lg ">
        <CarouselCard />
      </div>
      <div className="flex flex-col  gap-10  lg:w-3/5">
        <h1 className="font-bold overflow-hidden text-5xl">Title</h1>
        <p className="text-lg pr-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est impedit,
          deserunt eos, odit blanditiis dolore magni tempore quasi quam quaerat
          natus deleniti repudiandae modi illo! Rerum dolorem, dolores, atque
          laboriosam amet quos eligendi, mollitia ut iste quas distinctio?
          Veritatis repellat maiores sint ducimus illo quia quibusdam quasi.
          Assumenda, commodi incidunt tempora nam recusandae hic error atque
          saepe esse sunt voluptas facilis eos provident unde eum excepturi
          animi magni vel voluptatem. Rem similique aliquid cumque sequi nulla
          repellat nostrum quas labore, dicta illo impedit sed sapiente quis,
          aliquam animi provident assumenda hic laborum est. Doloribus pariatur,
          corporis sunt maiores illo consequatur.
        </p>
        <Button className="max-w-fit  text-white text-xl bg-violet-600">
          Contact us
        </Button>
      </div>
    </div>
  );
};

export default ServiceItem;

import Glide from "@glidejs/glide";

export function CarouselCard() {
  useEffect(() => {
    const slider = new Glide(".glide-06", {
      type: "carousel",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
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
      {/*<!-- Component: Card Carousel --> */}
      <div className="glide-06 relative w-full h-full overflow-hidden rounded bg-white shadow-xl shadow-slate-200">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 h-full">
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-05.jpg"
                className="m-auto object-cover h-[34rem] w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-01.jpg"
                className="m-auto h-[34rem] object-cover w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-02.jpg"
                className="m-auto h-[34rem] object-cover w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-03.jpg"
                className="m-auto h-[34rem] object-cover w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-04.jpg"
                className="m-auto h-[34rem] object-cover w-full max-w-full"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
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
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Card Carousel --> */}
    </>
  );
}
