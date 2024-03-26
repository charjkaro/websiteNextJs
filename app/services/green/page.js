// import GreenHero from "@/components/Services/green/GreenHero";
// import GreenServices from "@/components/Services/green/GreenServices";
// import Navbar from "@/components/common/Navbar";
// import React from "react";

// const Page = () => {
//   return (
//     <>
//       <div className="relative max-h-screen  overflow-hidden bg-[url('https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/svgviewer-png-output.png?alt=media&token=affb754a-877d-4624-bce3-8f6f4b1be9a6')] bg-cover bg-top bg-no-repeat">
//         {/* <div className="absolute top-0 z-40 h-screen w-full">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450">
//             <defs>
//               <filter
//                 id="bbblurry-filter"
//                 width="400%"
//                 height="400%"
//                 x="-100%"
//                 y="-100%"
//                 colorInterpolationFilters="sRGB"
//                 filterUnits="objectBoundingBox"
//                 primitiveUnits="userSpaceOnUse"
//               >
//                 <feGaussianBlur
//                   x="0%"
//                   y="0%"
//                   in="SourceGraphic"
//                   result="blur"
//                   stdDeviation="125"
//                 ></feGaussianBlur>
//               </filter>
//             </defs>
//             <g filter="url(#bbblurry-filter)">
//               <ellipse
//                 cx="282.049"
//                 cy="552.685"
//                 fill="hsla(98, 65%, 57%, 1.00)"
//                 rx="209.5"
//                 ry="244.5"
//               ></ellipse>
//               <ellipse
//                 cx="279.562"
//                 cy="306.806"
//                 fill="hsla(106, 88%, 47%, 1.00)"
//                 rx="209.5"
//                 ry="244.5"
//               ></ellipse>
//               <ellipse
//                 cx="464.674"
//                 cy="390.166"
//                 fill="hsla(182, 92%, 54%, 1.00)"
//                 rx="209.5"
//                 ry="244.5"
//               ></ellipse>
//             </g>
//           </svg>
//         </div> */}
//         <div className="relative z-10  h-screen bg-fixed bg-center bg-no-repeat">
//           <Navbar />
//           <GreenHero />
//         </div>
//       </div>
//       <div>
//         <GreenServices />
//       </div>
//     </>
//   );
// };

// export default Page;
import FAQ from "@/components/Home/FAQ";
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
      <StaticHeroDup
        title="Green Your Advertising, Grow Your Brand"
        subTitle="Leverage the power of eco-friendly advertising to connect with your audience and showcase your commitment to sustainability."
      />
      <CarouselLogo />
      <StaticFeatures
        h="Harnessing the Power of Eco-Friendly Advertising"
        p="Green advertising is not just a statement; it's a powerful strategy to align your brand with environmental values and reach eco-conscious consumers. Discover the benefits of integrating sustainability into your marketing campaigns with our green advertising solutions."
        bgC="#72FF13"
        // card start here
        c1Title="Eco-Conscious Reach"
        c1Desc="Our green advertising solutions ensure your brand resonates with eco-aware audiences, leveraging platforms that prioritize sustainability to enhance your brand's environmental commitment."
        // card end here
        // card start here
        c2Title="Sustainable Impact"
        c2Desc="By choosing eco-friendly advertising mediums, your campaign contributes to a smaller carbon footprint, supporting global sustainability efforts while engaging with your audience."
        // card end here
        // card start here
        c3Title="Innovative Formats"
        c3Desc="From digital displays powered by renewable energy to biodegradable materials for physical ads, we offer a range of innovative green advertising formats that are as creative as they are sustainable."
        // card end here
        // card start here
        c4Title="Enhanced Brand Image"
        c4Desc="Embrace green advertising to elevate your brand image, showcasing your commitment to sustainability and earning the trust and loyalty of environmentally conscious consumers."
      />
      <Whyus
        n1="30k"
        n2="30k"
        n3="30k"
        n4="30k"
        p1="Sustainability Expertise: Leverage CashurDrive's expertise in eco-friendly advertising to align your campaigns with sustainability goals and minimize environmental impact."
        p2="Customized Solutions: Benefit from tailored strategies that highlight your brand's eco-consciousness, using innovative and sustainable advertising formats."
        p3="  Enhanced Reputation: Elevate your brand's image with CashurDrive's green advertising, demonstrating your commitment to environmental responsibility and earning consumer trust.
        "
      />
      {/* <StaticStats /> */}
      <StaticWork />
      <FAQ
        q1="What makes an advertising solution 'green'?"
        s1="Green advertising solutions are designed to minimize environmental impact, utilizing sustainable materials, energy-efficient digital displays, and eco-friendly practices to deliver your brand message."
        q2="How can green advertising enhance my brand's image?"
        s2="Green advertising reflects your brand’s commitment to sustainability, appealing to eco-conscious consumers and enhancing your brand's image as a responsible and forward-thinking entity."
        q3="What types of green advertising formats does CashurDrive offer?"
        s3="CashurDrive offers various green advertising formats, including ads on electric vehicles, solar-powered digital billboards, and other eco-friendly materials that reduce environmental footprint."
        q4="Can CashurDrive help design my green advertising campaign?"
        s4="Yes, our team of creative experts specializes in designing impactful green advertising campaigns that not only capture attention but also convey your eco-friendly brand message effectively."
        q5="How does CashurDrive ensure the sustainability of its advertising solutions?"
        s5="We prioritize the use of renewable energy sources, sustainable materials, and eco-friendly practices throughout the campaign process, from production to placement and beyond."
        q6="How do I start a green advertising campaign with CashurDrive?"
        s6="Initiating a green advertising campaign with CashurDrive is easy. Contact us to discuss your sustainable advertising goals, and our team will guide you through the tailored campaign process, ensuring eco-friendly solutions that align with your brand values."
      />

      <Footer />
    </div>
  );
};

export default page;
