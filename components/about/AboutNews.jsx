"use client";

import { motion } from "framer-motion";
import React from "react";

const AboutAwards = () => {
  return (
    <div>
      <div className="p-10 ">
        <h1 className="text-4xl font-bold">Our Awards</h1>
        <div className="py-5">
          <Award />
          <Award />
          <Award />
          <Award />
        </div>
      </div>
    </div>
  );
};

export default AboutAwards;

function Award({}) {
  return (
    <motion.h1
      initial={{ opacity: 0.2, x: 50, scale: "98%" }}
      whileInView={{ opacity: 1, x: 0, scale: "100%" }}
      transition={{ duration: 1.5, delay: 0.4,  }}
      className="z-0 mx-auto my-2 max-w-3xl  border-t-2 border-yellow-400 text-6xl font-bold capitalize"
    >
      <span className="text-yellow-400">Gold</span>• Best Brand Architecture
      Solution{" "}
      <span className="text-lg font-normal">Some Award Event 2023</span>
    </motion.h1>
  );
}
