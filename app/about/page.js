import AboutFeatures from "@/components/about/AboutFeatures";
import AboutHero from "@/components/about/AboutHero";
import AboutPartners from "@/components/about/AboutPartners";
import AboutPresence from "@/components/about/AboutPresence";
import AboutTeam from "@/components/about/AboutTeam";
import AboutWork from "@/components/about/AboutWork";
import Footer from "@/components/common/Footer";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutHero />
      <AboutPartners />
      <AboutPresence />
      <AboutFeatures />
      <AboutTeam />
      <AboutWork />
      <Footer/>
    </div>
  );
};

export default page;
