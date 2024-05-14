import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div id="header-wrapper">
        <header>
          <nav>
            <ul className="header-logo">
              <Link to={"/"}>
                <li className="header-title">NETFLIX</li>
              </Link>
            </ul>
            <ul>
              <li className="header-secondButton">Přihlásit</li>
              <li className="header-button">Registrovat</li>
              <li>Neomezená podívaná</li>
            </ul>
          </nav>
        </header>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};
export default Header;
