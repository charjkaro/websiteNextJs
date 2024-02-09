/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="lg:p-20 p-5 lg:flex flex-row-reverse justify-between">
      <div className="flex items-center lg:w-2/5 justify-center">
        {/* <div className="h-96 w-96 rounded-full bg-[url('https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/Company%20Profile.png?alt=media&token=50372bf8-4513-4196-9304-cc9533a3aa02')] bg-cover bg-center"></div> */}
        <Image
          width={500}
          height={500}
          src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/Company%20Profile.png?alt=media&token=50372bf8-4513-4196-9304-cc9533a3aa02"
          alt=""
        />
      </div>
      <div className="lg:w-2/5">
        <h1 className="lg:text-6xl text-4xl font-bold py-5">About Company</h1>
        <div className="flex flex-col gap-4 text-xl text-gray-700 font-medium ">
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
