// import About from "@/components/about/About";
// import AboutAwards from "@/components/about/AboutNews";

import Cursor from "@/components/common/Cursor";
import Navbar from "@/components/common/Navbar";

import dynamic from "next/dynamic";

// Dynamically import the components
// const AboutFeatures = dynamic(() => import("@/components/about/AboutFeatures"));
const About = dynamic(() => import("@/components/about/About"));
// const AboutHero = dynamic(() => import("@/components/about/AboutHero"));
// const AboutPartners = dynamic(() => import("@/components/about/AboutPartners"));
// const AboutPresence = dynamic(() => import("@/components/about/AboutPresence"));
// const AboutTeam = dynamic(() => import("@/components/about/AboutTeam"));
// const AboutWork = dynamic(() => import("@/components/about/AboutWork"));
const Footer = dynamic(() => import("@/components/common/Footer"));
import React from "react";

const page = () => {
  return (
    <div>
    
      <div className="min-h-[100vh] ">
        <div className="fixed w-full z-50">
          <Navbar />
        </div>
        <About />
      </div>
      {/* <AboutAwards /> */}
      {/* <AboutPartners /> */}
      {/* <AboutPresence /> */}
      {/* <AboutFeatures /> */}
      {/* <AboutTeam /> */}
      {/* <AboutWork /> */}
      <Footer />
    </div>
  );
};

export default page;
