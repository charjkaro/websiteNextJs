import Career from "@/components/career/Career";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="fixed z-50 w-full">
        <Navbar />
      </div>
      <Career />
      <Footer />
    </div>
  );
};

export default Page;
