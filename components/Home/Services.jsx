import React from "react";
import { ThreeDCardDemo } from "../Services/transit/CardDemo";

export const Services = () => {
  return (
    <div className="bg-[#1B1B1B] text-white">
      <h1 className="text-center font-bold lg:text-6xl text-4xl pt-10 pb-5">
        Services
      </h1>
      <p className="text-center lg:text-3xl text-xl font-semibold lg:px-40 py-2">
        At Success Trends, we are committed to delivering high-quality solutions
        that drive business growth.
      </p>
      <div className="flex flex-col items-center gap-4 py-4 overflow-hidden">
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
            title="Static Advertisement"
            subTitle="Capture attention, make a lasting impact. Static ads deliver timeless messages, ensuring your brand stands out in the static landscape."
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
    <div className="grid grid-cols-3 p-8 w-4/5 border-4 hover:bg-gradient-to-tr from-violet-600 to-black via-transparent border-white rounded-full ">
      <div className="flex justify-center items-center">
        <h1 className="text-5xl p-2">Lead Magnet</h1>
      </div>
      <div className="flex justify-center items-center">
        <p>
          We create high-quality lead magnets that will capture the attention of
          potential customers and generate leads.
        </p>
      </div>
      <div className="flex justify-center items-center">
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
