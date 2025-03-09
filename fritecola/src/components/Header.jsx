import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/fritecolalogo.png";
import NavBar from "./NavBar";
function Header() {
  return (
    <div className="header-container">
      <Link to="/">
      <img className="logo" src={logo} alt="" />
      </Link>
      <div className="menu">
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
