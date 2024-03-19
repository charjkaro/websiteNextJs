import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Team from "@/components/team/Team";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="fixed z-50 w-full">
        <Navbar />
      </div>
      <Team />
      <Footer/>
    </div>
  );
};

export default page;
