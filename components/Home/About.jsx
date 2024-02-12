/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex-row-reverse justify-between p-5 lg:flex lg:p-20">
      <div className="flex items-center justify-center lg:w-2/5">
        {/* <div className="h-96 w-96 rounded-full bg-[url('https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/Company%20Profile.png?alt=media&token=50372bf8-4513-4196-9304-cc9533a3aa02')] bg-cover bg-center"></div> */}
        <Image
          width={500}
          height={500}
          src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/Company%20Profile.png?alt=media&token=50372bf8-4513-4196-9304-cc9533a3aa02"
          alt=""
        />
      </div>
      <div className="lg:w-2/5">
        <h1 className="py-5 text-4xl font-bold lg:text-6xl">About us</h1>
        <div className="flex flex-col gap-4 text-xl font-medium text-gray-700 ">
          <p>
            We are experts in crafting dynamic and engaging outdoor advertising
            solutions that ensure your brand stands out.
          </p>
          <p>
            From transit advertisements and eye-catching billboards to
            below-the-line activations and events, we offer the perfect
            platforms to amplify your brand message and foster its growth.
            solutions that ensure your brand stands out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
