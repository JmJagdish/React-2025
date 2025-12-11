import React from "react";
import logo from "./assets/logo.png";

const NavBar = () => (
  <div id="main">
    <div id="logo">
      <img src={logo} alt="logo" />
    </div>

    <div id="searchbar">
      <input id="searchinput" type="text" placeholder="Search here!!" />
    </div>

    <div id="userIcon"></div>
  </div>
);

export default NavBar;
