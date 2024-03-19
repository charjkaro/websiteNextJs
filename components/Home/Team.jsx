"use client";

// import React from "react";
// import TeamCarouselLogo from "../common/TeamCarousel";
// import Cursor from "../common/Cursor";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <motion.div  initial={{ opacity: 0, scale: "90%" }}
    whileInView={{ opacity: 1, scale: "100%" }}
    transition={{ duration: 4 }} viewport={{ once: true }} className="p-5 lg:p-10">
      <div className="">
        <h1 className="font-secondary p-2 text-center text-4xl font-bold text-primary lg:text-6xl">
          Meet The Squad!
        </h1>
      </div>
      {/* <TeamCarouselLogo /> */}
      <div className="">
        <div className="relative mt-10 grid h-[20rem] w-full grid-cols-4 gap-2 overflow-hidden rounded-xl  p-2  text-white lg:h-[26rem] ">
          <div className="absolute top-0 z-50 flex h-full w-full items-center justify-center">
            <a
              href="/team"
              className="flex h-28 w-28 items-center justify-center rounded-full bg-white duration-250  hover:bg-black lg:h-40 lg:w-40"
            >
              <h1 className="w-fit  p-2 text-center text-lg font-bold text-primary duration-200  ">
                Visit Our Team
              </h1>
            </a>
          </div>
          <div className="col-span-2 h-full w-full">
            <video
              src="https://firebasestorage.googleapis.com/v0/b/blog-d0b4a.appspot.com/o/3dd4d562-b028-4adb-b706-a545a8a807d3.mp4?alt=media&token=9b8a610c-0513-4c7b-97be-59fdbc6e5fdd"
              autoPlay
              loop
              playsInline
              muted
              className="h-full w-full object-cover"
            ></video>
          </div>
          <div className="col-span-2 flex h-full w-full">
            <div className="grid h-full w-full grid-cols-1 grid-rows-2 gap-2 ">
              <div className=" row-span-1 h-[10rem] max-w-full overflow-hidden lg:h-[13rem] ">
                <video
                  src="https://firebasestorage.googleapis.com/v0/b/blog-d0b4a.appspot.com/o/36007599-b697-4abb-aa3b-4d37673e9ba0.mp4?alt=media&token=f2ba66ed-0673-4170-bf40-7d4b2809e517"
                  autoPlay
                  loop
                  playsInline
                  muted
                  className="h-full w-full object-cover"
                ></video>
              </div>
              <div className=" row-span-1 h-[10rem] max-w-full overflow-hidden lg:h-[13rem] ">
                <video
                  src="https://firebasestorage.googleapis.com/v0/b/blog-d0b4a.appspot.com/o/043021b9-466d-4211-ba63-e1f59b1e4b43.mp4?alt=media&token=4644e79a-0f63-46a5-9953-5cd1f2bf5db8"
                  autoPlay
                  loop
                  playsInline
                  muted
                  className="h-full w-full object-cover"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
