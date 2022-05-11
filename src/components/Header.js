import React from "react";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <section className="header">
      <img src={logo} alt="home" className="header__logo logo" />

      <h1 className="header__title">Exquisite dining since 1989</h1>
      <p className="header__copy">
        Experience our seasonal menu in beautiful country surroundings. Eat the
        freshest produce from the comfort of our farmhouse.
      </p>
    </section>
  );
}

export default Header;
