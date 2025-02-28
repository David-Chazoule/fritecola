import React from "react";

import logo from "../img/fritecolalogo.png";
import NavBar from "./NavBar";
function Header() {
  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="" />

      <div className="menu">
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
