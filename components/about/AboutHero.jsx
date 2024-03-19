import React from "react";
import Navbar from "../common/Navbar";
import { SpotlightPreview } from "../Services/transit/Random";

const AboutHero = () => {
  return (
    <>
      {/* <SpotlightPreview
        subTitle="We are experts in crafting dynamic and engaging outdoor advertising solutions that ensure your brand stands out. From transit advertisements and eye-catching billboards to below-the-line activations and events, we offer the perfect platforms to amplify your brand message and foster its growth. By working closely with our clients, we understand their goals and bring their vision to life while being mindful of budget and return on investment. Our innovative approach and commitment to excellence allow us to create advertising strategies that make a significant impact in the market. Let us help you elevate your brand and achieve your business objectives with our tailored outdoor advertising solutions."
        // title="Cash ur Drive"
      /> */}
      {/* our team section  */}
      {/* work with us section  */}
      <div className=" grid grid-cols-2 items-center p-10  py-28">
        <h1 className="col-span-1 max-w-xl  text-7xl font-bold">
          You can’t scale profitably without a strong brand
          <button className="rounded-xl border-2 border-white bg-transparent p-4 text-sm font-light  duration-150 hover:bg-primary">
            Download Our Deck
          </button>
        </h1>
        <div className="col-span-1 h-96 w-full rounded-xl bg-green-600"></div>
      </div>
      <hr className="mx-10 my-10 bg-slate-500" />
      <div className="flex items-center justify-evenly ">
        <div className=" text-pretty">
          <p className="mb-10  max-w-3xl text-xl  font-bold">
            We are experts in crafting dynamic and engaging outdoor advertising
            solutions that ensure your brand stands out. From transit
            advertisements and eye-catching billboards to below-the-line
            activations and events, we offer the perfect platforms to amplify
            your brand message and foster its growth. By working closely with
            our clients, we understand their goals and bring their vision to
            life while being mindful of budget and return on investment. Our
            innovative approach and commitment to excellence allow us to create
            advertising strategies that make a significant impact in the market.
            Let us help you elevate your brand and achieve your business
            objectives with our tailored outdoor advertising solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
