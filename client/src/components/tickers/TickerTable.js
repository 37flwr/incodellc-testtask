import React from "react";
import TickersData from "./TickersData";
import TickerTableHeader from "./TickerTableHeader";

const TickerTable = () => {
  return (
    <div className="ticker-table">
      <TickerTableHeader />
      <TickersData />
    </div>
  );
};

export default TickerTable;
