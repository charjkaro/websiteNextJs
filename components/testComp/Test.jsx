"use client";

import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import Link from "next/link";
import { motion } from "framer-motion";


const Test = () => {
  const glideRef = useRef(null);

  useEffect(() => {
    const glide = new Glide(glideRef.current, {
      type: "none",
      startAt: 0,
      perView: 5,

      breakpoints: {
        800: {
          perView: 1.05, // Display one slide on screens up to 800px
        },
      },
      gap: 10, // Add gap between slides
    });

    glide.mount();

    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <div>
      <div className="  ">
        <motion.h1  initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }} viewport={{ once: true }} className=" b my-5 bg-primary p-5 px-5  font-secondary text-3xl font-bold text-white lg:px-20 lg:text-5xl">
          Our Services <br /> are&nbsp;
          <span className="font-secondary text-white ">
            Tailored
          </span>
          &nbsp;For
        </motion.h1>
      </div>
      <motion.div  initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }} viewport={{ once: true }} className="glide relative z-30 py-10" ref={glideRef}>
        <div
          data-glide-el="track"
          className="glide__track grid  grid-cols-5 gap-4 px-10"
        >
          <ul className="glide__slides flex">
            <li className="glide__slide">
              <FeatureCard
                index="01"
                title="Established & Emerging Brands:"
                desc="Whether you're a seasoned player or a newcomer, we cater to brands of all sizes."
              />
            </li>
            <li className="glide__slide">
              <FeatureCard
                index="02"
                title="Local Businesses & Global Players: "
                desc="From community-focused brands to MNCs,to help businesses connect with their target audience."
              />
            </li>
            <li className="glide__slide">
              <FeatureCard
                index="03"
                title=" Innovative Entrepreneurs:  "
                desc="Ambitious individuals with bold visions, who are eager to disrupt industries."
              />
            </li>
            <li className="glide__slide">
              <FeatureCard
                index="04"
                title=" Brand  & Visionary Leaders: "
                desc="Looking for a brand refresh or seeking long-term growth,our expertise is at your service to help you achieve your goals."
              />
            </li>
            <li className="glide__slide">
              <FeatureCard
                index="05"
                title="Innovative Entrepreneurs:"
                desc="Ambitious individuals with bold visions,who are eager to disrupt industries."
              />
            </li>
          </ul>
        </div>
      </motion.div>
      <div className="flex items-center px-5 lg:px-10">
        <Link href="/work">
          <h3 className="mr-3 flex items-center gap-2 text-nowrap rounded-3xl border-3 border-black p-3 font-primary text-xl font-semibold text-blue-500 duration-200 hover:mr-5 hover:translate-x-5 lg:text-nowrap">
            Discover our Work{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={50}
              viewBox="0 -960 960 960"
              width={50}
            >
              <path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64zm0 240q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q134 0 227-93t93-227-93-227-227-93-227 93-93 227 93 227 227 93m0-320" />
            </svg>
          </h3>
        </Link>
        <div className="h-[2px] w-full bg-gray-600"></div>
      </div>
    </div>
  );
};

export default Test;

function FeatureCard({ index, title, desc }) {
  return (
    <div className="h-64 rounded-2xl border-3 border-white bg-primary p-4 backdrop-blur-xl duration-200 hover:-translate-y-2 hover:border-blue-500 ">
      <h1 className="font-secondary text-2xl text-white">{index}</h1>
      <h2 className="font-primary text-xl font-bold text-white">{title}</h2>
      <p className="font-thin text-white">{desc}</p>
    </div>
  );
}
