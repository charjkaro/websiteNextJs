import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import WorkHero from "@/components/work/WorkHero";
import WorkShowcase from "@/components/work/WorkShowcase";
import React from "react";

const page = () => {
  return <div className="bg-[#1b1b1b] text-white">
    <div>
        <Navbar/>
        <WorkHero/>
        <WorkShowcase/>
        <Footer/>
    </div>
  </div>;
};

export default page;
