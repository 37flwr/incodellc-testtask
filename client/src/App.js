// import logo from './logo.svg';
import socket from "./utils/socket";
import { useEffect, useState } from "react";
import { startPolling } from "./utils/socketActions";
import "./App.scss";

function App() {
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    startPolling(socket);

    socket.on("ticker", (data) => {
      console.log(data);
      setTickers([...data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <div>
        {tickers?.map(({ exchange, ticker, price, change_percent }) => (
          <div key={ticker} className="ticker-item">
            <p>{exchange}</p>
            <p>{ticker}</p>
            <p>{price}</p>
            <div>{change_percent}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
