import React from "react";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <header>
      <img src={logo} alt="home" className="header__logo logo" />
    </header>
  );
}

export default Header;
