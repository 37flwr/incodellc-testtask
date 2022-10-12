import React from "react";
import TickerTable from "../../components/tickers/TickerTable";
import "./styles.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <TickerTable />
    </div>
  );
};

export default HomePage;
