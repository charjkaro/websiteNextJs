import GreenHero from "@/components/Services/green/GreenHero";
import GreenServices from "@/components/Services/green/GreenServices";
import Navbar from "@/components/common/Navbar";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="relative max-h-screen  overflow-hidden bg-[url('https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/svgviewer-png-output.png?alt=media&token=affb754a-877d-4624-bce3-8f6f4b1be9a6')] bg-cover bg-top bg-no-repeat">
        {/* <div className="absolute top-0 z-40 h-screen w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450">
            <defs>
              <filter
                id="bbblurry-filter"
                width="400%"
                height="400%"
                x="-100%"
                y="-100%"
                colorInterpolationFilters="sRGB"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
              >
                <feGaussianBlur
                  x="0%"
                  y="0%"
                  in="SourceGraphic"
                  result="blur"
                  stdDeviation="125"
                ></feGaussianBlur>
              </filter>
            </defs>
            <g filter="url(#bbblurry-filter)">
              <ellipse
                cx="282.049"
                cy="552.685"
                fill="hsla(98, 65%, 57%, 1.00)"
                rx="209.5"
                ry="244.5"
              ></ellipse>
              <ellipse
                cx="279.562"
                cy="306.806"
                fill="hsla(106, 88%, 47%, 1.00)"
                rx="209.5"
                ry="244.5"
              ></ellipse>
              <ellipse
                cx="464.674"
                cy="390.166"
                fill="hsla(182, 92%, 54%, 1.00)"
                rx="209.5"
                ry="244.5"
              ></ellipse>
            </g>
          </svg>
        </div> */}
        <div className="relative z-10  h-screen bg-fixed bg-center bg-no-repeat">
          <Navbar />
          <GreenHero />
        </div>
      </div>
      <div>
        <GreenServices />
      </div>
    </>
  );
};

export default Page;
