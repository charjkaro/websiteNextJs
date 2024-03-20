// import CTA from "@/components/Home/CTA";
// import FAQ from "@/components/Home/FAQ";
// import CarouselLogo from "@/components/Home/Marquee";
// import Stats from "@/components/Home/Stats";
// import Cursor from "@/components/common/Cursor";
// import Test from "@/components/testComp/Test";
// import TestTwo from "@/components/testComp/TestTwo";
// import dynamic from "next/dynamic";
// const HeroMarquee = dynamic(() => import("@/components/Home/HeroMarquee"));

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
    <main className="overflow-x-hidden">
      <Cursor color="black" />

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
      <FAQ />
      <CTA />
      <Blog />
      <Footer />
    </main>
  );
}
