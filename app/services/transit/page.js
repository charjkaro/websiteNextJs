// import dynamic from "next/dynamic";

// // Dynamically import the TransitHero component
// const TransitHero = dynamic(
//   () => import("@/components/Services/transit/TransitHero"),
// );

// // Dynamically import the Footer component
// const Footer = dynamic(() => import("@/components/common/Footer"));

// // Dynamically import the Navbar component
// const Navbar = dynamic(() => import("@/components/common/Navbar"));
// import React from "react";

// const page = () => {
//   return (
//     <>
//       <TransitHero />
//       <Footer />
//     </>
//   );
// };

// export default page;
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
        title="Move Your Brand into the Spotlight
"
        subTitle="Turn every commute into a journey with your brand. Capitalize on transit advertising to drive visibility and engagement."
      />
      <CarouselLogo />
      <StaticFeatures
        h="The Impact of Transit Advertising"
        p="Transit advertising propels your brand through bustling streets and serene suburbs, offering a mobile canvas to capture attention and ignite interest. Explore the advantages of our transit advertising solutions, designed to move your audience as much as your message."
        // card start here
        c1Title="Dynamic Mobility"
        c1Desc="Transit advertising takes your brand on a journey, reaching audiences across the urban landscape. Buses, taxis, and trains become moving billboards, offering unparalleled exposure as they traverse high-traffic routes daily."
        // card end here
        // card start here
        c2Title="Engaged Commuter Audience"
        c2Desc="Leverage the captive audience of daily commuters by placing your ads in and on public transportation. This strategic positioning allows for sustained viewer engagement, as commuters typically have more time to absorb your message."
        // card end here
        // card start here
        c3Title="Versatile Advertising Formats"
        c3Desc="Our transit advertising solutions come in various formats, from full vehicle wraps to interior panels and digital displays, providing a flexible canvas to tailor your message for maximum impact and audience relevance."
        // card end here
        // card start here
        c4Title="Geo-Targeted Impact"
        c4Desc="With transit advertising, your campaign gains the advantage of geo-targeting, placing your brand in front of specific demographics and communities. This strategic approach ensures your message resonates with the right audience, enhancing campaign effectiveness."
        // card end here
      />
      <Whyus
        n1="30k"
        n2="30k"
        n3="30k"
        n4="30k"
        p1=" Innovative Design: CashurDrive specializes in unique transit ad designs that capture and hold attention. Our expertise ensures your message stands out in the bustling transit environment, maximizing visibility and impact."
        p2="  Tailored Campaigns: We customize your transit advertising to meet specific goals, targeting the right routes and demographics for broad or localized reach, ensuring your message resonates effectively with the intended audience."
        p3="  Data-Driven Strategy: Utilizing advanced analytics, CashurDrive optimizes ad placement based on commuter patterns and engagement metrics, enhancing campaign performance and ROI with strategic insights."
      />
      {/* <StaticStats /> */}
      <StaticWork />
      <FAQ
        q1="What types of transit advertising can I implement with CashurDrive?"
        s1="CashurDrive specializes in a variety of transit advertising formats, including bus wraps, taxi top ads, interior transit ads, and digital screens inside public transportation vehicles, tailored to maximize your campaign's reach and impact."
        q2="How does CashurDrive target specific audiences with transit advertising?"
        s2="Leveraging data on commuting patterns, demographics, and consumer behavior, CashurDrive strategically places transit ads to intersect with your target audience’s daily routines, ensuring optimal visibility and engagement."
        q3="Can CashurDrive customize a transit ad campaign to fit my budget?"
        s3="Absolutely, our team works with you to tailor transit advertising campaigns that align with your marketing objectives while adhering to your budget, ensuring an efficient and cost-effective advertising solution."
        q4="What creative services does CashurDrive offer for transit advertising?"
        s4="From conceptualization to final design, CashurDrive offers comprehensive creative services, including eye-catching ad design and impactful messaging, to ensure your transit advertising stands out and communicates effectively with your audience."
        q5="How is the effectiveness of a transit ad campaign measured at CashurDrive?"
        s5="CashurDrive utilizes advanced tracking and analytics to measure campaign performance, including reach, engagement, and conversion metrics. This data-driven approach enables us to refine strategies and maximize your return on investment."
        q6="How do I get started with a transit advertising campaign at CashurDrive?"
        s6="Starting is easy. Simply contact CashurDrive via our website or phone. Our dedicated team will discuss your needs, help you choose the right transit advertising options, and guide you through every step of the campaign, from planning to execution and analysis."
      />
      <Footer />
    </div>
  );
};

export default page;
