/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import CarouselControlsOutside from "../common/Carousel";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <>
      <div className="mt-10 p-5 lg:p-20">
        <h1 className="text-4xl font-bold lg:text-6xl">
          Our Complete <span className="text-primary">Brand Boosters</span>
        </h1>
        <div className="p-5">
          {/* services  */}
          <a href="/services/transit">
            <div className="my-4 items-center gap-2 text-3xl font-bold lg:flex lg:text-5xl">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className=""
              >
                Transit{" "}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex w-full items-center justify-between bg-primary py-2 duration-100 hover:bg-black  hover:text-white"
              >
                <p>Advertising</p>

                <div className="hidden text-lg lg:flex">
                  <ul className="flex gap-4 px-4">
                    <li>Cabs</li>
                    <li>|</li>
                    <li>Auto</li>
                    <li>|</li>
                    <li>Fleet</li>
                    <li>|</li>
                    <li>Bus</li>
                  </ul>
                </div>
              </motion.div>
            </div>
            {/* third end here  */}
          </a>

          <a href="services/static">
            <div className="my-4 items-center gap-2 text-3xl font-bold lg:flex lg:text-5xl">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className=""
              >
                OOH{" "}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex w-full items-center justify-between bg-primary py-2 duration-100 hover:bg-black  hover:text-white"
              >
                <p>Advertising</p>

                <div className="hidden text-lg lg:flex">
                  <ul className="flex gap-4 px-4">
                    <li>Hoardings/Billboard</li>
                    <li>|</li>
                    <li>Bus Queue Shelters</li>
                    <li>|</li>
                    <li>Digital Wall Painting</li>
                  </ul>
                </div>
              </motion.div>
            </div>
            {/* first end here  */}
          </a>
          <a href="/services/green">
            <div className="my-4 items-center gap-2 text-3xl font-bold lg:flex lg:text-5xl">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className=""
              >
                Green{" "}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex w-full items-center justify-between bg-primary py-2 duration-100 hover:bg-black  hover:text-white"
              >
                <p>Advertising</p>

                <div className="hidden text-lg lg:flex">
                  <ul className="flex gap-4 px-4">
                    <li>EV Charging Station</li>
                    <li>|</li>
                    <li>Electric Bus</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </a>

          {/* Second end here  */}

          <a href="services/digital">
            <div className="my-4 items-center gap-2 text-3xl font-bold lg:flex lg:text-5xl">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className=""
              >
                Digital
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex w-full items-center justify-between bg-primary py-2 duration-100 hover:bg-black  hover:text-white"
              >
                <p>Advertising</p>

                <div className="hidden text-lg lg:flex">
                  <ul className="flex gap-4 px-4">
                    <li>Digital Marketing</li>
                    <li>|</li>
                    <li>SEO</li>
                    <li>|</li>
                    <li>Graphic Designing</li>
                  </ul>
                </div>
              </motion.div>
            </div>
            {/* fourth end here  */}
          </a>
        </div>
      </div>
    </>
  );
};

export default Work;
// function Stats({ count, title }) {
//   return (
//     <div className="">
//       <div className="w-fit flex-col justify-center items-center text-center">
//         <h1 className="font-bold text-4xl p-2">{count}</h1>
//         <p className="text-lg font-light text-gray-500 max-w-sm">{title}</p>
//       </div>
//     </div>
//   );
// }
{
  /* <div>
<div className="lg:p-20 p-5 lg:flex items-center justify-between">
  <h1 className="lg:text-6xl text-5xl p-2 font-bold">Our Recent Work</h1>
  <p className="lg:w-1/3 lg:text-right ">
    We're not just talkers, we're walkers. We'll show you how our kickass
    work can help you grow your business
  </p>
</div>
<div className="lg:flex justify-center">
  <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/nnnoise.svg?alt=media&token=fd18ab99-b073-4189-87bb-8d1290fccac3')] bg-cover bg-center  lg:p-10 lg:w-4/5 rounded-xl">
    <CarouselControlsOutside />
  </div>
</div>
<div className="">
  <h1 className="font-bold text-5xl my-10 text-center py-2">
    Our Track Record Of Success
  </h1>
  <div className="flex lg:justify-between justify-center p-5 flex-wrap   lg:px-20 gap-5">
    <Stats
      count="10000+"
      title="CAR WRAPS"
    />
    <Stats
      count="10M"
      title="VINYL PRINTING"
    />
    <Stats
      count="10K+"
      title="CAMPAIGNS"
    />
    <Stats
      count="8000+"
      title="CLIENTS SERVED"
    />
  </div>
</div>
</div> */
}
