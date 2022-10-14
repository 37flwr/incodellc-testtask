import React from "react";
import { Link } from "react-router-dom";
import ActionButton from "../../../components/buttons/ActionButton";
import "./styles.scss";

const PageNotFound = () => {
  return (
    <div className="fallback-page page-not-found">
      <span className="page-not-found__heading">
        Oops! Looks like such page does not exist...
      </span>

      <Link to="/" className="page-not-found__button">
        <ActionButton>Home Page</ActionButton>
      </Link>
    </div>
  );
};

export default PageNotFound;
