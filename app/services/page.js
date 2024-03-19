import Work from "@/components/Home/Work";
import dynamic from "next/dynamic";

// Dynamically import the Services component
const Services = dynamic(() => import("@/components/Home/Services"));

// Dynamically import the ServicesCarousel component
const ServicesCarousel = dynamic(
  () => import("@/components/Services/ServicesCarousel"),
);

// Dynamically import the ServicesHero component
const ServicesHero = dynamic(
  () => import("@/components/Services/ServicesHero"),
);

// Dynamically import the ServicesList component
const ServicesList = dynamic(
  () => import("@/components/Services/ServicesList"),
);

// Dynamically import the Footer component
const Footer = dynamic(() => import("@/components/common/Footer"));

// Dynamically import the Navbar component
const Navbar = dynamic(() => import("@/components/common/Navbar"));
import React from "react";

const page = () => {
  return (
    <div className="">
      <Navbar />
      {/* <ServicesHero/> */}
      <Work />

      {/* <ServicesList/> */}
      <Footer />
    </div>
  );
};

export default page;
