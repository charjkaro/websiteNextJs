import React from "react";

import { ThreeDCardDemo } from "../Services/transit/CardDemo";

export const Services = () => {
  return (
    <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/nnnoise.svg?alt=media&token=fd18ab99-b073-4189-87bb-8d1290fccac3')] bg-cover bg-center text-white">
      <h1 className="pb-5 pt-10 text-center text-4xl font-bold lg:text-6xl">
        Services
      </h1>
      <p className="py-2 text-center text-xl font-semibold lg:px-40 lg:text-3xl">
        At Success Trends, we are committed to delivering high-quality solutions
        that drive business growth.
      </p>
      <div className="flex flex-col items-center gap-4 overflow-hidden py-4">
        {/* <ServiceComp     />
        <ServiceComp     />
        <ServiceComp     />
        <ServiceComp     /> */}
        <a href="/services/transit">
          <ThreeDCardDemo
            title="Transit Advertisement"
            subTitle="Effortless commute, unbeatable visibility. Elevate your brand with transit advertising – reach diverse audiences daily, creating lasting impressions that drive success."
          />
        </a>
        <a href="/services/static">
          <ThreeDCardDemo
            title="OOH Advertisement"
            subTitle="Capture attention, make a lasting impact. OOH ads deliver timeless messages, ensuring your brand stands out in the static landscape."
          />
        </a>
        <a href="/services/digital">
          <ThreeDCardDemo
            title="Digital Marketing"
            subTitle="Dominate the digital realm! Harness the power of targeted ads, real-time analytics, and dynamic engagement for unparalleled brand visibility and growth."
          />
        </a>

        {/* <ThreeDCardDemo
          title="Lead Magnet"
          subTitle="We create high-quality lead magnets that will capture the attention of potential customers and generate leads."
        /> */}
      </div>
    </div>
  );
};

export default Services;

function ServiceComp({ props }) {
  return (
    <div className="grid w-4/5 grid-cols-3 rounded-full border-4 border-white from-violet-600 via-transparent to-black p-8 hover:bg-gradient-to-tr ">
      <div className="flex items-center justify-center">
        <h1 className="p-2 text-5xl">Lead Magnet</h1>
      </div>
      <div className="flex items-center justify-center">
        <p>
          We create high-quality lead magnets that will capture the attention of
          potential customers and generate leads.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          viewBox="0 -960 960 960"
          className="invert"
        >
          <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
        </svg>
      </div>
    </div>
  );
}
