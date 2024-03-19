"use client";

import React, { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import Image from "next/image";

const Navbar = () => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setBackgroundColor("white");
      } else {
        setBackgroundColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`nav flex items-center justify-between  bg-${backgroundColor} to-transparent text-white transition-colors duration-300 md:px-10`}
      >
        <a href="/" className="logo p-2 text-4xl">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/IMG-20231204-WA0000-removebg-preview%20(1).webp?alt=media&token=7cce3584-6172-4b66-9626-c701738e2e65"
            width={100}
            height={100}
            loading="eager"
            alt="logo"
            className="w-16"
          />
        </a>
        <NavMenu />
      </div>
    </div>
  );
};

export default Navbar;
