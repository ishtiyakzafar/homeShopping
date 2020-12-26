import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <>
      <div className="logo">
        <NavLink to="/">
          <h1>Home shopping</h1>
        </NavLink>
      </div>
    </>
  );
};
export default NavbarLogo;
