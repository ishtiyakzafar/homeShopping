import React from "react";
import NavbarLogo from "./NavbarLogo";
import CartBtn from "./CartBtn";

const Navbar = () => {
  return (
    <>
      <div className=" container-fluid navbar">
        <NavbarLogo />
        <CartBtn />
      </div>
    </>
  );
};
export default Navbar;
