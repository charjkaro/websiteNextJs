import CarouselLogo from "@/components/Home/Marquee";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import WorkHero from "@/components/work/WorkHero";
import WorkShowcase from "@/components/work/WorkShowcase";
import React from "react";

const page = () => {
  return (
    <div className=" overflow-x-hidden text-gray-200">
      <div>
        <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/file%20(1).png?alt=media&token=0585b722-4f77-423e-8789-105e00f29853')] bg-cover bg-center bg-blend-hard-light">
          <div className="fixed z-50 w-full">
            <Navbar />
          </div>
          <WorkHero />
        </div>
        <div className="mt-10 text-center text-5xl font-bold text-black lg:text-7xl">
          Our Clients
          <CarouselLogo />
        </div>
        <WorkShowcase />
        <Footer />
      </div>
    </div>
  );
};

export default page;
