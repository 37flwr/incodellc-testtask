import React from "react";
import TickersData from "./TickersData";
import TickerTableHeader from "./TickerTableHeader";
import "./styles.scss";

const TickerTable = () => {
  return (
    <div className="ticker-table" data-testid="ticker-table">
      <TickerTableHeader />
      <TickersData />
    </div>
  );
};

export default TickerTable;
