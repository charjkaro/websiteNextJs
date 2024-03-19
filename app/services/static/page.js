import CarouselLogo from "@/components/Home/Marquee";
import StaticFeatures from "@/components/Services/static/StaticFeatures";
import StaticHeroDup from "@/components/Services/static/StaticHeroDup";
import StaticStats from "@/components/Services/static/StaticStats";
import StaticWork from "@/components/Services/static/StaticWork";
import Whyus from "@/components/Services/static/Whyus";
import dynamic from "next/dynamic";

// Dynamically import the StaticHero component
const StaticHero = dynamic(
  () => import("@/components/Services/static/StaticHero"),
);

// Dynamically import the Footer component
const Footer = dynamic(() => import("@/components/common/Footer"));
import React from "react";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      {/* <StaticHero /> */}
      <StaticHeroDup />
      <CarouselLogo />
      <StaticFeatures />
      <Whyus />
      {/* <StaticStats /> */}
      <StaticWork />
      <Footer />
    </div>
  );
};

export default page;
