// import CTA from "@/components/Home/CTA";
// import FAQ from "@/components/Home/FAQ";
// import CarouselLogo from "@/components/Home/Marquee";
// import Stats from "@/components/Home/Stats";
// import Cursor from "@/components/common/Cursor";
// import Test from "@/components/testComp/Test";
// import TestTwo from "@/components/testComp/TestTwo";
// import dynamic from "next/dynamic";
// const HeroMarquee = dynamic(() => import("@/components/Home/HeroMarquee"));

import Chat from "@/components/Chatbot/Chat";
import Services from "@/components/Home/Services";
import dynamic from "next/dynamic";

// // Dynamically import the About component
// const About = dynamic(() => import("@/components/Home/About"));

// // Dynamically import the Blog component
// const Blog = dynamic(() => import("@/components/Home/Blog"));

// // Dynamically import the Hero component
// const Hero = dynamic(() => import("@/components/Home/Hero"));

// // Dynamically import the Marquee component
// const Marquee = dynamic(() => import("@/components/Home/Marquee"));

// // Dynamically import the Services component
// const Services = dynamic(() => import("@/components/Home/Services"));

// // Dynamically import the Team component
// const Team = dynamic(() => import("@/components/Home/Team"));

// // Dynamically import the Work component
// const Work = dynamic(() => import("@/components/Home/Work"));

// // Dynamically import the Footer component
// const Footer = dynamic(() => import("@/components/common/Footer"));

// // Dynamically import the Button component
// const Button = dynamic(() => import("@nextui-org/button"));

// // Dynamically import the Image component
// const Image = dynamic(() => import("next/image"));
const CTA = dynamic(() => import("@/components/Home/CTA"));
const FAQ = dynamic(() => import("@/components/Home/FAQ"));
const CarouselLogo = dynamic(() => import("@/components/Home/Marquee"));
const Stats = dynamic(() => import("@/components/Home/Stats"));
const Cursor = dynamic(() => import("@/components/common/Cursor"));
const Test = dynamic(() => import("@/components/testComp/Test"));
const TestTwo = dynamic(() => import("@/components/testComp/TestTwo"));
// const HeroMarquee = dynamic(() => import("@/components/Home/HeroMarquee"));
const About = dynamic(() => import("@/components/Home/About"));
const Blog = dynamic(() => import("@/components/Home/Blog"));
const Hero = dynamic(() => import("@/components/Home/Hero"));
// const Marquee = dynamic(() => import("@/components/Home/Marquee"));
// const Services = dynamic(() => import("@/components/Home/Services"));
const Team = dynamic(() => import("@/components/Home/Team"));
// const Work = dynamic(() => import("@/components/Home/Work"));
const Footer = dynamic(() => import("@/components/common/Footer"));
// const Button = dynamic(() => import("@nextui-org/button"));
// const Image = dynamic(() => import("next/image"));

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-cover bg-fixed  ">
      <Hero />

      {/* <HeroMarquee /> */}
      <About />
      <Services />
      {/* <Test /> */}

      <TestTwo />
      <div className="relative ">
        <div className=""></div>
        <CarouselLogo />
      </div>
      <Stats />
      {/* <Marquee /> */}
      {/* <Work /> */}
      <Team />
      <FAQ
        q1="What is CashurDrive and how does it benefit my brand?"
        s1="CashurDrive is a leading outdoor advertising agency specializing in innovative advertising solutions across OOH, transit, and green advertising mediums. Our services enhance brand visibility, engage target audiences, and drive impactful results."
        q2="What advertising solutions does CashurDrive offer?"
        s2="We offer a diverse range of advertising solutions including digital and traditional billboards, transit advertising on buses, cabs, and autos, eco-friendly green advertising, and customized campaigns tailored to meet specific brand needs."
        q3="How does CashurDrive ensure my advertising campaign is successful?"
        s3="Utilizing advanced analytics, strategic placement, and creative design, CashurDrive ensures campaign success by targeting the right audience at the right time, maximizing visibility and engagement."
        q4="Can CashurDrive help design my advertising campaign?"
        s4="Absolutely! Our team of creative experts is adept at crafting eye-catching and effective advertising campaigns that resonate with audiences, amplifying your brand message across any medium."
        q5="What makes CashurDrive different from other advertising agencies?"
        s5="CashurDrive sets itself apart with a commitment to innovation, sustainability in advertising, and personalized campaign strategies that align closely with client objectives, ensuring not just reach but meaningful engagement."
        q6="How can I start an advertising campaign with CashurDrive?"
        s6="Starting your advertising journey with CashurDrive is easy. Contact us through our website or give us a call. Our dedicated team will guide you through the process, from planning and strategy to execution and analysis."
      />

      <CTA />
      <Blog />
      <Footer />
    </main>
  );
}
