import { ContactForm } from "@/app/services/[slug]/page";
import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const ContactHero = () => {
  return (
    <div className="bg-[#1b1b1b]">
        <Navbar/>
      <ContactForm />
      <Footer/>
    </div>
  );
};

export default ContactHero;
