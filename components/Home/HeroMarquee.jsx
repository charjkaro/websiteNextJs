"use client";

import Glide from "@glidejs/glide";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

/////////////////////////////

export const introHeaderVariants = {
  hide: {
    opacity: 0,
    x: -500,
    y: -10,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 20,
    transition: {
      duration: 3,
    },
  },
};
export const introPictureVariants = {
  hide: {
    opacity: 0,
    x: 500,
    y: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
//////////////////////////////
const HeroMarquee = () => {
  useEffect(() => {
    const slider = new Glide(".glide-10", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 10000,
      animationTimingFunc: "linear",
      perView: 1.9,
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
    <motion.div
      initial="hide"
      whileInView="show"
      viewport={{ once: true }}
      exit="hide"
      variants={introPictureVariants}
      className="glide-10 relative w-[103vw]     py-2 text-primary"
    >
      {/* <!-- Slides --> */}
      <div data-glide-el="track" className="">
        <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full items-center overflow-hidden p-5">
          <li className="text-xl font-bold lg:text-6xl ">OOH Advertisement</li>
          <li className="text-xl font-bold lg:text-6xl ">
            Transit Advertisement
          </li>
          <li className="w-fit text-xl font-bold lg:text-6xl ">
            Green Advertisement
          </li>
          <li className="w-fit text-xl font-bold lg:text-6xl ">
            Digital Advertisement
          </li>
          {/* <li className="text-3xl font-bold">
            We are experts in crafting dynamic and engaging outdoor advertising
            solutions that ensure your brand stands out.
          </li> */}
        </ul>
      </div>
    </motion.div>
  );
};

export default HeroMarquee;
