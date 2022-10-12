import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <Link className="header__logo header__item" to="/">
        TickerChart
      </Link>
      <Link className="header__button header__item" to="/settings">
        Settings
      </Link>
    </header>
  );
};

export default Header;
