import React from "react";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <div>
      <div className="nav flex text-white justify-between py-5 px-10">
        <div className="logo text-4xl p-2">logo</div>
        <NavMenu />
      </div>
    </div>
  );
};

export default Navbar;
