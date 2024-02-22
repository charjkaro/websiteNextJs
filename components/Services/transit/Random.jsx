import React from "react";
import { cn } from "@/utils/cn";
import Spotlight from "@/components/ui/glowing-stars";
import Navbar from "@/components/common/Navbar";
import { ThreeDCardDemo } from "./CardDemo";

export function SpotlightPreview({ title, subTitle }) {
  return (
    <>
      <div className="relative">
        <div className="bg-grid-white/[0.02] relative flex w-full flex-col-reverse items-center overflow-hidden rounded-md  bg-[#1b1b1b] antialiased lg:h-[40rem] lg:flex-row lg:justify-evenly">
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
          />

          <div className=" relative z-10 w-full   max-w-3xl p-4  md:pt-0 lg:px-10 lg:pt-20">
            <h1 className="overflow-hidden bg-opacity-50 bg-gradient-to-b  from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
              {title}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base font-normal  text-neutral-300">
              {subTitle}
            </p>
          </div>
          <div className=" mt-32 h-64 w-64 rounded-full lg:h-96 lg:w-96">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/IMG-20231204-WA0000-removebg-preview%20(1).webp?alt=media&token=7cce3584-6172-4b66-9626-c701738e2e65"
              alt="cash ur drive"
              className="h-full w-full p-10  object-contain"
            />
          </div>
        </div>
        <div className="absolute top-0 w-full">
          <Navbar />
        </div>
      </div>
      <div className=""></div>
    </>
  );
}
