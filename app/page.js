import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Marquee from "@/components/Home/Marquee";
import Services from "@/components/Home/Services";
import Work from "@/components/Home/Work";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Home() {
  return <main className="">
    <Hero/>
    <Marquee/>
    <About/>
    <Services/>
    <Work/>
  </main>;
}
