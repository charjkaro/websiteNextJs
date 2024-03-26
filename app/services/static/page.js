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
        title="Make Your Message Stand Still, But Not Forgotten
"
        subTitle="Transform static spaces into dynamic showcases. Elevate your brand with impactful static advertising."
      />
      <CarouselLogo />
      <StaticFeatures
        h="The Power of Outdoor Static Advertising"
        p="Static outdoor advertising offers a unique and impactful way to reach
        your target audience, leaving a lasting impression and driving brand
        awareness. Discover the key features that make our static advertising
        solutions the perfect choice for your marketing campaigns."
        // card start here
        c1Title="Unparalleled Visibility"
        c1Desc="Our strategically placed billboards, building wraps, and digital screens
       command attention, ensuring your brand message is seen by thousands of
      potential customers every day."
        // card end here
        // card start here
        c2Title="Targeted Audience Reach"
        c2Desc="We carefully analyze demographics, traffic patterns, and consumer behavior to place your static ads in prime locations frequented by your ideal target audience, maximizing your campaign's effectiveness"
        // card end here
        // card start here
        c3Title="Cost-Effective Longevity"
        c3Desc="Our static advertising solutions provide an exceptional return on investment, delivering high-impact impressions over an extended period, making them a cost-effective choice for long-term branding"
        // card end here
        // card start here
        c4Title="Captivating Creativity"
        c4Desc="With our team of talented designers and a vast canvas for expression, we create eye-catching and memorable static ad campaigns that captivate audiences and set your brand apart from the competition."
        // card end here
      />
      <Whyus
        n1="30k"
        n2="30k"
        n3="30k"
        p1=" Innovative Reach: CashurDrive specializes in captivating OOH campaigns that ensure your brand achieves maximum visibility in high-traffic areas"
        p2=" Customized Solutions: We offer tailored OOH strategies that align perfectly with your brand's objectives, ensuring impactful and memorable campaigns."
        p3=" Proven Expertise: With a track record of successful campaigns and satisfied clients, CashurDrive is your trusted partner for achieving outstanding OOH advertising results."
      />
      {/* <StaticStats /> */}
      <StaticWork />
      <FAQ
        q1="What types of OOH advertising formats does CashurDrive offer?"
        s1="CashurDrive offers a wide range of OOH advertising formats, including digital billboards, transit advertising (buses, cabs, and autos), traditional billboards, and unique green media options like EV bus branding and EV charging station ads."
        q2="How does CashurDrive ensure my OOH campaign reaches my target audience?"
        s2="We utilize advanced analytics and targeting technologies to place your OOH advertisements in strategic locations, maximizing visibility among your specific target demographic. Our campaigns are designed to engage your audience effectively, ensuring your message is seen by the right people at the right time."
        q3="Can CashurDrive assist with the creative design of my OOH advertisement?"
        s3="Yes, our team of creative experts specializes in designing eye-catching and effective OOH advertisements. We work closely with you to understand your brand and campaign goals, crafting bespoke creatives that resonate with your audience and amplify your message."
        q4="What makes CashurDrive different from other OOH advertising agencies?"
        s4="CashurDrive distinguishes itself through innovative OOH solutions, personalized campaign strategies, and a commitment to sustainability in advertising. Our extensive experience, combined with a focus on using data-driven insights for optimal placement, ensures that your campaigns not only reach but also engage your target audience effectively."
        q5="How do I measure the success of my OOH campaign with CashurDrive?"
        s5="We provide comprehensive campaign analytics, including reach, frequency, engagement metrics, and more, to measure the success of your OOH campaign. Our reports allow you to see the impact of your advertising efforts and make informed decisions for future campaigns."
        q6="How can I start an OOH advertising campaign with CashurDrive?"
        s6="Starting your OOH advertising campaign with CashurDrive is simple. Contact us through our website or call our dedicated team to discuss your advertising needs. We'll guide you through the process, from initial strategy planning to campaign launch and analysis, ensuring a smooth and successful advertising experience."
      />
      <Footer />
    </div>
  );
};

export default page;
