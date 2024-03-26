import Navbar from "@/components/common/Navbar";
import React from "react";

const StaticHeroDup = ({ title, subTitle }) => {
  return (
    <div className="relative min-h-[80vh] w-full bg-gradient-to-br from-blue-800 to-primary-50">
      <div className="fixed z-50 w-full">
        <Navbar />
      </div>
      <video
        src="https://firebasestorage.googleapis.com/v0/b/blog-d0b4a.appspot.com/o/Website%20Videos.mp4?alt=media&token=72336173-6655-459e-8085-29acc92628fd"
        loop
        muted
        playsInline
        autoPlay
        className="h-full w-full object-cover object-center"
      ></video>
      <div className="absolute  top-0 flex h-full w-full flex-col justify-center bg-gradient-to-br from-transparent to-black p-10">
        <h1 className=" max-w-2xl  text-5xl font-bold text-white"> {title}</h1>
        <p className="mt-5 max-w-xl  text-xl text-white"> {subTitle}</p>
        <button className="mt-5 w-fit rounded-2xl border-2 border-white bg-white p-2 px-8 text-black hover:bg-primary">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default StaticHeroDup;
// Make Your Message Stand Still, But Not Forgotten

// Transform static spaces into dynamic showcases. Elevate your brand
// with impactful static advertising.
