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
    <div
      className="ticker-table_header table__grid"
      data-testid="ticker-table-header"
    >
      {tickerDetails.map((t) => (
        <span
          key={t}
          className="table__grid_element"
          data-testid="ticker-table-header-elem"
        >
          {t}
        </span>
      ))}
    </div>
  );
};

export default TickerTableHeader;
