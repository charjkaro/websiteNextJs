import Services from "@/components/Home/Services";
import ServicesHero from "@/components/Services/ServicesHero";
import ServicesList from "@/components/Services/ServicesList";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";

const page = () => {
  return <div className="bg-[#1b1b1b]">
    <Navbar/>
    {/* <ServicesHero/> */}
    <Services/>
    {/* <ServicesList/> */}
    <Footer/>
  </div>;
};

export default page;
