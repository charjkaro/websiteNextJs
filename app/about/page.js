import AboutHero from "@/components/about/AboutHero";
import AboutTeam from "@/components/about/AboutTeam";
import AboutWork from "@/components/about/AboutWork";
import Footer from "@/components/common/Footer";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutHero />
      <AboutTeam />
      <AboutWork />
      <Footer/>
    </div>
  );
};

export default page;
