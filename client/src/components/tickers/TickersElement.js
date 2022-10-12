import classNames from "classnames";

const TickersElement = ({ data }) => {
  const {
    exchange,
    ticker,
    price,
    vector,
    change,
    change_percent,
    dividend,
    yield: tickerYield,
  } = data;

  return (
    <div key={ticker} className="table__grid">
      <span className="table__grid_element">{exchange}</span>
      <span className="table__grid_element">{ticker}</span>
      <span className="table__grid_element">{price}</span>
      <span className="table__grid_element">{change}</span>
      <div
        className={classNames("table__grid_element", vector ? "green" : "red")}
      >
        {parseInt(change_percent * 100) + "%"}
      </div>
      <span className="table__grid_element">{dividend}</span>
      <span className="table__grid_element">{tickerYield}</span>
    </div>
  );
};

export default TickersElement;
