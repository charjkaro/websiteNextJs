import React from "react";
import Navbar from "../common/Navbar";


const AboutHero = () => {
  return (
    <>
      <div className=" bg-[url('https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center ">
        <Navbar />
        <div className="text-white p-20 text-5xl font-bold ">
          <p className="p-1">
            Cash ur Drive has been growing brands and businesses since 2009. We
            continue that rich legacy through Borderless Creativity—operating,
            innovating, and creating at the intersection of talent and
            capabilities. Our experts in Public Relations, Consulting,
            Advertising, Health, and Experience work fluidly across 131 offices
            in 93 countries.
          </p>
        </div>
      </div>

      {/* our team section  */}

      {/* work with us section  */}
    </>
  );
};

export default AboutHero;
