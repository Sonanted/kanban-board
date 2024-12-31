import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <p className="header__logo">Kanbanted</p>
      <input
        className="header__input-search"
        type="text"
        name=""
        id=""
        placeholder="Search"
      />
    </header>
  );
};

export default Header;
