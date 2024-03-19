"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
motion;
import { ThreeDCardDemo } from "../Services/transit/CardDemo";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <div className="mx-4 mt-5 items-center rounded-3xl  lg:flex ">
        <div className="h-10  ">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=" border-x-0 border-t-0 border-x-transparent border-b-secondary  border-t-transparent text-center  text-5xl text-primary lg:-rotate-90  lg:border-8 "
          >
            Tailored For
          </motion.p>
        </div>
        <div className="flex flex-col p-3 lg:gap-5">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="p-2"
          >
            <h1 className="text-3xl font-bold">
              Established & Emerging{" "}
              <span className="text-primary">Brands:</span>
            </h1>
            <p className="text-xl font-extralight ">
              Whether you're a seasoned player or a newcomer,
            </p>
            <p className="w-fit bg-primary text-xl text-white">
              we cater to brands of all sizes.
            </p>
          </motion.div>

          {/* second */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="p-2"
          >
            <h1 className="text-3xl font-bold">
              Innovative <span className="text-primary">Entrepreneurs:</span>
            </h1>
            <p className="text-xl font-extralight ">
              Ambitious individuals with bold visions,
            </p>
            <p className="w-fit bg-primary text-xl text-white">
              who are eager to disrupt industries.
            </p>
          </motion.div>
          {/* third */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="p-2"
          >
            <h1 className="text-3xl font-bold">
              <span className="text-primary">Local Businesses</span> & Global
              Players:
            </h1>
            <p className="text-xl font-extralight ">
              From community-focused brands to MNCs,
            </p>
            <p className="w-fit bg-primary text-xl text-white">
              to help businesses connect with their target audience.
            </p>
          </motion.div>
          {/* fourth */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="p-2"
          >
            <h1 className="text-3xl font-bold">
              Brand <span className="text-primary">Revitalizers</span> &{" "}
              <span className="text-primary">Visionary</span> Leaders:
            </h1>
            <p className="text-xl font-extralight ">
              Looking for a brand refresh or seeking long-term growth
            </p>
            <p className="w-fit bg-primary text-xl text-white">
              our expertise is at your service to help you achieve your goals.
            </p>
          </motion.div>
          {/* end  */}
          <motion.a
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            href="/work"
          >
            <div className="w-full bg-primary p-4 font-sans text-3xl font-bold duration-500 ease-soft-spring hover:bg-black hover:text-white">
              <p>Discover more to find you an ideal campaign</p>
            </div>
          </motion.a>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-right"
          >
            P.s Recommended “DO NOT CLICK” You might fall in LOVE{" "}
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Services;

// export const Services = () => {
//   return (
//     <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/nnnoise.svg?alt=media&token=fd18ab99-b073-4189-87bb-8d1290fccac3')] bg-cover bg-center text-white">
//       <h1 className="pb-5 pt-10 text-center text-4xl font-bold lg:text-6xl">
//         Services
//       </h1>
//       <p className="py-2 text-center text-xl font-semibold lg:px-40 lg:text-3xl">
//         At Success Trends, we are committed to delivering high-quality solutions
//         that drive business growth.
//       </p>
//       <div className="flex flex-col items-center gap-4 overflow-hidden py-4">
//         {/* <ServiceComp     />
//         <ServiceComp     />
//         <ServiceComp     />
//         <ServiceComp     /> */}
//         <a href="/services/transit">
//           <ThreeDCardDemo
//             title="Transit Advertisement"
//             subTitle="Effortless commute, unbeatable visibility. Elevate your brand with transit advertising – reach diverse audiences daily, creating lasting impressions that drive success."
//           />
//         </a>
//         <a href="/services/static">
//           <ThreeDCardDemo
//             title="OOH Advertisement"
//             subTitle="Capture attention, make a lasting impact. OOH ads deliver timeless messages, ensuring your brand stands out in the static landscape."
//           />
//         </a>
//         <a href="/services/digital">
//           <ThreeDCardDemo
//             title="Digital Marketing"
//             subTitle="Dominate the digital realm! Harness the power of targeted ads, real-time analytics, and dynamic engagement for unparalleled brand visibility and growth."
//           />
//         </a>

//         {/* <ThreeDCardDemo
//           title="Lead Magnet"
//           subTitle="We create high-quality lead magnets that will capture the attention of potential customers and generate leads."
//         /> */}
//       </div>
//     </div>
//   );
// };

// export default Services;

// function ServiceComp({ props }) {
//   return (
//     <div className="grid w-4/5 grid-cols-3 rounded-full border-4 border-white from-violet-600 via-transparent to-black p-8 hover:bg-gradient-to-tr ">
//       <div className="flex items-center justify-center">
//         <h1 className="p-2 text-5xl">Lead Magnet</h1>
//       </div>
//       <div className="flex items-center justify-center">
//         <p>
//           We create high-quality lead magnets that will capture the attention of
//           potential customers and generate leads.
//         </p>
//       </div>
//       <div className="flex items-center justify-center">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={50}
//           height={50}
//           viewBox="0 -960 960 960"
//           className="invert"
//         >
//           <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
//         </svg>
//       </div>
//     </div>
//   );
// }
