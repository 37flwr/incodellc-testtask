import React, { useEffect, useState } from "react";
import classNames from "classnames";
import socket from "../../utils/socket";
import { endPolling, startPolling } from "../../utils/socketActions";

const TickersData = () => {
  const [tickers, setTickers] = useState([]);

  const updateTickers = (data) => {
    setTickers((currTickers) =>
      data.map((ticker) => ({
        ...ticker,
        vector:
          currTickers.find((t) => t.ticker === ticker.ticker)?.price <
          ticker.price
            ? true
            : false,
      }))
    );
  };

  useEffect(() => {
    startPolling();

    socket.on("ticker", (data) => {
      updateTickers(data);
    });

    return () => {
      if (socket.readyState === 1) {
        endPolling();
      }
    };
  }, []);

  return tickers?.map(
    ({
      exchange,
      ticker,
      price,
      vector,
      change,
      change_percent,
      dividend,
      yield: tickerYield,
    }) => (
      <div key={ticker} className="table__grid">
        <p>{exchange}</p>
        <p>{ticker}</p>
        <p>{price}</p>
        <div className={classNames(vector ? "green" : "red")}></div>
        <p>{change}</p>
        <div>{change_percent}</div>
        <p>{dividend}</p>
        <p>{tickerYield}</p>
      </div>
    )
  );
};

export default TickersData;
