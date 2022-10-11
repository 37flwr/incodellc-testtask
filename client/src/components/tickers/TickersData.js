import React, { useEffect, useState } from "react";
import socket from "../../utils/socket";
import { endPolling, startPolling } from "../../utils/socketActions";

const TickersData = () => {
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    startPolling();

    socket.on("ticker", (data) => {
      console.log(data);
      setTickers([...data]);
    });

    return () => {
      endPolling();
    };
  }, []);

  return tickers?.map(
    ({
      exchange,
      ticker,
      price,
      change,
      change_percent,
      dividend,
      yield: tickerYield,
    }) => (
      <div key={ticker} className="table__grid">
        <p>{exchange}</p>
        <p>{ticker}</p>
        <p>{price}</p>
        <p>{change}</p>
        <div>{change_percent}</div>
        <p>{dividend}</p>
        <p>{tickerYield}</p>
      </div>
    )
  );
};

export default TickersData;
