import ServicesHero from "@/components/Services/ServicesHero";
import ServicesList from "@/components/Services/ServicesList";
import Footer from "@/components/common/Footer";
import React from "react";

const page = () => {
  return <div>
    <ServicesHero/>
    <ServicesList/>
    <Footer/>
  </div>;
};

export default page;
