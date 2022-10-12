import React from "react";

const TickerTableHeader = () => {
  const tickerDetails = [
    "Exhange",
    "Ticker",
    "Price",
    "Change",
    "Change Percent",
    "Dividend",
    "Yield",
  ];
  return (
    <div className="ticker-table_header table__grid">
      {tickerDetails.map((t) => (
        <span key={t} className="table__grid_element">
          {t}
        </span>
      ))}
    </div>
  );
};

export default TickerTableHeader;
