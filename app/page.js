import dynamic from "next/dynamic";

// Dynamically import the About component
const About = dynamic(() => import("@/components/Home/About"));

// Dynamically import the Blog component
const Blog = dynamic(() => import("@/components/Home/Blog"));

// Dynamically import the Hero component
const Hero = dynamic(() => import("@/components/Home/Hero"));

// Dynamically import the Marquee component
const Marquee = dynamic(() => import("@/components/Home/Marquee"));

// Dynamically import the Services component
const Services = dynamic(() => import("@/components/Home/Services"));

// Dynamically import the Team component
const Team = dynamic(() => import("@/components/Home/Team"));

// Dynamically import the Work component
const Work = dynamic(() => import("@/components/Home/Work"));

// Dynamically import the Footer component
const Footer = dynamic(() => import("@/components/common/Footer"));

// Dynamically import the Button component
const Button = dynamic(() => import("@nextui-org/button"));

// Dynamically import the Image component
const Image = dynamic(() => import("next/image"));

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <link
        rel="stylesheet"
        href="node_modules/@glidejs/glide/dist/css/glide.core.min.css"
      />

      <link
        rel="stylesheet"
        href="node_modules/@glidejs/glide/dist/css/glide.theme.min.css"
      ></link>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Work />
      <Team />
      <Blog />
      <Footer />
    </main>
  );
}
