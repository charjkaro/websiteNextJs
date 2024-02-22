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
    <div>
      <StaticHero />
      <Footer />
    </div>
  );
};

export default page;
