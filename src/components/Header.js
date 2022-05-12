import React from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";

function Header() {
  return (
    <section className="header">
      <img src={logo} alt="home" className="header__logo logo" />
      <div className="header__text-wrap">
        <h1 className="header__title">Exquisite dining since 1989</h1>
        <p className="header__subtitle">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <Button btnLinkTo="/" btnTxt="book a table" btnClass="btn btn__book" />
      </div>
    </section>
  );
}

export default Header;
