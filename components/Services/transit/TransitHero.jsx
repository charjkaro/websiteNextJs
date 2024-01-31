import Navbar from "@/components/common/Navbar";
import React from "react";
import { GlowingStarsBackgroundCardPreview, SpotlightPreview } from "./Random";

const TransitHero = () => {
  return (
    <div>
      <div className="bg-[#1b1b1b] text-white">
        <SpotlightPreview
          title="Transit Advertising"
          subTitle="Your Gateway to Successful Journeys"
        />
      </div>
    </div>
  );
};

export default TransitHero;
