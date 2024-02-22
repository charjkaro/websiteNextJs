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
      <div className="flex items-center justify-evenly ">
        <div className="w-1/3">
          {" "}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/IMG-20231204-WA0000-removebg-preview%20(1).webp?alt=media&token=7cce3584-6172-4b66-9626-c701738e2e65"
            alt="cash ur drive"
            className="h-full w-full object-contain  p-10"
          />
        </div>
        <div className="w-1/2 text-pretty">
          <h1 className="text-4xl font-bold">Cash ur Drive</h1>
          <p className="text-base">
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
