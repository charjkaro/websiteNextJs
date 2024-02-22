import React from "react";
import NavMenu from "./NavMenu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div className="nav flex items-center justify-between p-4 text-white md:px-10 md:py-5">
        <a href="/" className="logo p-2 text-4xl">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/IMG-20231204-WA0000-removebg-preview%20(1).webp?alt=media&token=7cce3584-6172-4b66-9626-c701738e2e65"
            width={100}
            height={100}
            loading="eager"
            alt="logo"
          />
        </a>
        <NavMenu />
      </div>
    </div>
  );
};

export default Navbar;
