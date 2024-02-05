import React from "react";
import { cn } from "@/utils/cn";
import Spotlight from "@/components/ui/glowing-stars";
import Navbar from "@/components/common/Navbar";
import { ThreeDCardDemo } from "./CardDemo";

export function SpotlightPreview({ title, subTitle }) {
  return (
    <>
      <div className="relative">
        <div className="lg:h-[40rem] w-full rounded-md flex flex-col-reverse items-center lg:justify-evenly  bg-[#1b1b1b] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />

          <div className=" p-4 max-w-3xl lg:px-10   relative z-10  w-full lg:pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 overflow-hidden">
              {title}
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-3xl  mx-auto">
              {subTitle}
            </p>
          </div>
          <div className="bg-green-700 lg:h-96 mt-32 lg:w-96 w-64 h-64 rounded-full"></div>
        </div>
        <div className="absolute top-0 w-full">
          <Navbar />
        </div>
      </div>
      <div className=""></div>
    </>
  );
}
