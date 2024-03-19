import CarouselLogo from "@/components/Home/Marquee";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import CarouselTinder from "@/components/test/CarouselTinder";
import WorkHero from "@/components/work/WorkHero";
import React from "react";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/file%20(1).png?alt=media&token=0585b722-4f77-423e-8789-105e00f29853')] bg-cover bg-center bg-blend-hard-light">
        <div className="fixed z-50 w-full">
          <Navbar />
        </div>
        <WorkHero />
      </div>
      <div className="mt-10 text-center text-7xl font-bold text-black">
        Our Clients
        <CarouselLogo />
      </div>
      <CarouselTinder />
      <Footer />
    </div>
  );
};

export default page;
