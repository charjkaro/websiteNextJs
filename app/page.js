import About from "@/components/Home/About";
import Blog from "@/components/Home/Blog";
import Hero from "@/components/Home/Hero";
import Marquee from "@/components/Home/Marquee";
import Services from "@/components/Home/Services";
import Team from "@/components/Home/Team";
import Work from "@/components/Home/Work";
import Footer from "@/components/common/Footer";
import { Button } from "@nextui-org/button";
import Image from "next/image";

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
