import dynamic from "next/dynamic";

// Dynamically import the TransitHero component
const TransitHero = dynamic(
  () => import("@/components/Services/transit/TransitHero"),
);

// Dynamically import the Footer component
const Footer = dynamic(() => import("@/components/common/Footer"));

// Dynamically import the Navbar component
const Navbar = dynamic(() => import("@/components/common/Navbar"));
import React from "react";

const page = () => {
  return (
    <>
      <TransitHero />
      <Footer />
    </>
  );
};

export default page;
