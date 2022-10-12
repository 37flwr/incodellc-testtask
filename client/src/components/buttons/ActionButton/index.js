import React from "react";
import "./styles.scss";

const index = ({ onClick, children }) => {
  return (
    <button className="action-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default index;
