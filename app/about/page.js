import Navbar from "@/components/common/Navbar";
import dynamic from "next/dynamic";

// Dynamically import the components
const AboutFeatures = dynamic(() => import("@/components/about/AboutFeatures"));
const AboutHero = dynamic(() => import("@/components/about/AboutHero"));
const AboutPartners = dynamic(() => import("@/components/about/AboutPartners"));
const AboutPresence = dynamic(() => import("@/components/about/AboutPresence"));
const AboutTeam = dynamic(() => import("@/components/about/AboutTeam"));
const AboutWork = dynamic(() => import("@/components/about/AboutWork"));
const Footer = dynamic(() => import("@/components/common/Footer"));
import React from "react";

const page = () => {
  return (
    <div>
      <div className="min-h-[100vh] bg-[#1b1b1b] text-white">
        <Navbar />
        <AboutHero />
      </div>
      <AboutPartners />
      <AboutPresence />
      <AboutFeatures />
      {/* <AboutTeam /> */}
      <AboutWork />
      <Footer />
    </div>
  );
};

export default page;
