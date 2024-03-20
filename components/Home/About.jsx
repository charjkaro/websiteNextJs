/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
/* eslint-disable react/no-unescaped-entities */

const About = () => {
  return (
    // <div className="flex flex-col-reverse justify-evenly p-5 lg:flex-row lg:p-10">
    //   <div className="relative flex flex-col  gap-3 text-3xl lg:max-w-3xl lg:gap-5 lg:text-6xl   ">
    //     <h1 className=" font-primary  font-semibold ">
    //       {" "}
    //       We're more than just an advertising agency
    //     </h1>
    //     <p className="font-secondary max-w-xl text-sm lg:leading-loose">
    //       Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing
    //       elit. Odit dolorem, id dicta pariatur praesentium officiis voluptas
    //       provident exercitationem voluptate ab tenetur magnam hic, soluta
    //       necessitatibus sunt doloribus est alias magni? sit amet consectetur
    //       adipisicing elit. Dolorum impedit veniam fugiat inventore voluptatum?
    //       Ipsam rerum mollitia, odit quas eius enim quia cumque incidunt officia
    //       vel minima quae similique magni fugiat fugit ullam possimus aspernatur
    //       facilis excepturi temporibus quidem perspiciatis!
    //     </p>
    //     <div className="relative">
    //       <button className="font-primary z-40 mt-5 w-fit bg-[#1b1b1b] px-10 py-3 text-left text-medium text-white shadow-xl duration-200 hover:translate-y-1 lg:text-lg ">
    //         {" "}
    //         Find out More About Us
    //       </button>
    //     </div>
    //   </div>
    //   <div className="h-72 w-64 rounded-bl-[100px] rounded-tr-[100px] bg-gradient-to-tr from-purple-600 via-pink-400 to-blue-400 p-1 lg:h-96 lg:w-96 lg:rounded-bl-[200px] lg:rounded-tr-[200px]">
    //     <div className="h-full w-full  rounded-bl-[100px] rounded-tr-[100px] bg-white lg:rounded-bl-[200px] lg:rounded-tr-[200px]"></div>
    //   </div>
    // </div>
    <div className="flex flex-col justify-center  py-5 lg:py-20">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className=""
      >
        <p className="pl-5 text-2xl font-bold lg:pl-20 lg:text-4xl">
          We're more than just an advertising agency
        </p>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="my-5 bg-primary p-5 pl-5 font-secondary text-3xl font-bold text-white lg:pl-20 lg:text-5xl"
        >
          Where Advertising Becomes an Art Form &{" "}
        </motion.p>
        <p className="pl-5 text-2xl font-bold lg:pl-20 lg:text-4xl">
          {" "}
          <span className="text-4xl text-primary lg:text-8xl">
            Brands{" "}
          </span>{" "}
          Steals the Spotlight!
        </p>
      </motion.div>
    </div>
  );
};

export default About;

// <div className="flex-row-reverse justify-between p-5 lg:flex lg:p-20">
// <div className="flex items-center justify-center lg:w-2/5">
//   {/* <div className="h-96 w-96 rounded-full bg-[url('https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/Company%20Profile.png?alt=media&token=50372bf8-4513-4196-9304-cc9533a3aa02')] bg-cover bg-center"></div> */}
//   <Image
//     width={500}
//     height={500}
//     src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/Company%20Profile.png?alt=media&token=50372bf8-4513-4196-9304-cc9533a3aa02"
//     alt=""
//   />
// </div>
// <div className="lg:w-2/5">
//   <h1 className="py-5 text-4xl font-bold lg:text-6xl">About us</h1>
//   <div className="flex flex-col gap-4 text-xl font-medium text-gray-700 ">
//     <p>
//       We are experts in crafting dynamic and engaging outdoor advertising
//       solutions that ensure your brand stands out.
//     </p>
//     <p>
//       From transit advertisements and eye-catching billboards to
//       below-the-line activations and events, we offer the perfect
//       platforms to amplify your brand message and foster its growth.
//       solutions that ensure your brand stands out.
//     </p>
//   </div>
// </div>
// </div>
