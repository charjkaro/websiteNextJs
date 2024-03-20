"use client";

import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export function MeteorsDemo() {
  return (
    // <motion.div
    //   initial={{ opacity: 0, height: "10rem" }}
    //   whileInView={{ opacity: 1, height: "100vh" }}
    //   transition={{ duration: 2 }}
    //   viewport={{ once: true }}
    //   className="relative  h-screen    overflow-hidden bg-black"
    // >
    //   <div className="] text-white">
    //     <img
    //       src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFRyYW5zZm9ybT0icm90YXRlKDE1MCwgMC41LCAwLjUpIiB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0iZmZmbHV4LWdyYWRpZW50Ij48c3RvcCBzdG9wLWNvbG9yPSIjZmY5MTRkIiBzdG9wLW9wYWNpdHk9IjEiIG9mZnNldD0iMCUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSJoc2woMCwgMCUsIDEwMCUpIiBzdG9wLW9wYWNpdHk9IjEiIG9mZnNldD0iMTAwJSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGZpbHRlciBpZD0iZmZmbHV4LWZpbHRlciIgeD0iLTIwJSIgeT0iLTIwJSIgd2lkdGg9IjE0MCUiIGhlaWdodD0iMTQwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBwcmltaXRpdmVVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CiAgPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuMDA1IDAuMDAzIiBudW1PY3RhdmVzPSIyIiBzZWVkPSIyIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlc3VsdD0idHVyYnVsZW5jZSI+PC9mZVR1cmJ1bGVuY2U+CiAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMjAgMCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0idHVyYnVsZW5jZSIgZWRnZU1vZGU9ImR1cGxpY2F0ZSIgcmVzdWx0PSJibHVyIj48L2ZlR2F1c3NpYW5CbHVyPgogIDxmZUJsZW5kIG1vZGU9ImNvbG9yLWRvZGdlIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImJsdXIiIHJlc3VsdD0iYmxlbmQiPjwvZmVCbGVuZD4KICAKPC9maWx0ZXI+PC9kZWZzPjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSJ1cmwoI2ZmZmx1eC1ncmFkaWVudCkiIGZpbHRlcj0idXJsKCNmZmZsdXgtZmlsdGVyKSI+PC9yZWN0Pjwvc3ZnPg=="
    //       alt=""
    //       className="h-full w-full object-cover"
    //     />
    //   </div>
    //   <div className="fixed left-0 top-0 z-50 w-full  ">
    //     <Navbar />
    //   </div>
    //   <div className="absolute top-0 h-full w-full p-10  py-20 text-center ">
    //     <div className="p-10 ">
    //       <h1 className="col-span-1  mx-auto max-w-[70vw]  text-7xl font-bold">
    //         Where Brands Thrive in the Great Outdoors
    //       </h1>
    //       <p className="mx-auto mt-10 max-w-xl text-lg">
    //         Cash ur Drive is the innovative outdoor advertising ecosystem where
    //         brands engage audiences in the real world.
    //       </p>
    //       <button className=" mt-4 w-fit justify-center bg-black p-3 text-white ">
    //         <div className="flex">
    //           <p className="text-white">Explore more </p>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             height={30}
    //             viewBox="0 -960 960 960"
    //             width={30}
    //             className="invert"
    //           >
    //             <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
    //           </svg>
    //         </div>
    //       </button>
    //     </div>

    //     {/* <div className="col-span-1 h-full w-full bg-green-600"></div> */}
    //   </div>
    // </motion.div>
    <div>
      <div className="fixed z-50 w-full ">
        <Navbar />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="pt-14"
      >
        <div className="relative">
          <div className="flex flex-col-reverse items-center justify-evenly p-5 lg:flex-row">
            <div className="flex max-w-xl flex-col gap-4">
              <h1 className="font-secondary text-4xl lg:text-6xl">
                Lorem, ipsum dolor sit amet.
              </h1>
              <p className="font-primary text-medium font-semibold lg:text-lg">
                Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Recusandae, enim! amet consectetur adipisicing
                elit. Commodi unde aliquam, totam exercitationem nihil
                voluptatem minima incidunt rem provident quod?
              </p>
              <Link href="/contact">
                <button className="w-fit bg-[#1b1b1b] p-3 px-10 font-primary text-white">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="mb-4 h-96 w-72 rounded-t-full  border-3 border-black p-5 lg:h-[28rem]">
              <div className="h-full w-full rounded-t-full bg-blue-400"></div>
            </div>
            <div className="hidden flex-col gap-4 lg:flex">
              <div className="h-52 w-52 rounded-3xl bg-green-400"></div>
              <div className="h-32 w-52 rounded-3xl bg-green-400"></div>
              <div className="h-32 w-52 rounded-3xl bg-green-400"></div>
            </div>
          </div>
          <div className="absolute right-[40%] top-2 hover:animate-spin">
            <DataButton />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export const DataButton = () => {
  return (
    <div className="grid-col-3 grid">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={100}
        height={100}
        fill="none"
        viewBox="0 0 200 200"
      >
        <path
          fill="url(#paint0_linear_116_153)"
          d="M100 0c3.395 53.76 46.24 96.605 100 100-53.76 3.395-96.605 46.24-100 100-3.395-53.76-46.24-96.605-100-100C53.76 96.605 96.605 53.76 100 0Z"
        />
        <defs>
          <linearGradient
            id="paint0_linear_116_153"
            x1={100}
            x2={100}
            y1={0}
            y2={200}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DF99F7" />
            <stop offset={1} stopColor="#FFDBB0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
