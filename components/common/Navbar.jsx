"use client";

import React, { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [textColor, settextColor] = useState("white");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setBackgroundColor("white");
        settextColor("black");
      } else {
        setBackgroundColor("transparent");
        settextColor("white");
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
        <ul className={`hidden gap-5 font-semibold text-${textColor} lg:flex`}>
          <Link href="/services/static" className="text-blue-500">
            OOH
          </Link>
          <Link href="/services/transit">Transit</Link>
          <Link href="/services/digital">Digital</Link>
          <Link href="/services/green">Green</Link>
          <Link href="/about">About</Link>
          <Link href="/team">Team</Link>
          <Link href="/team/career">Career</Link>
        </ul>
        <button className="hidden bg-black p-3 px-5 text-white lg:flex">
          Contact us
        </button>
        <div className="lg:hidden">
          <NavMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
