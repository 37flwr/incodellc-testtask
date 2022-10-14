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

  const renderChangeColor = (vector) => {
    if (typeof vector !== "undefined") {
      return vector ? "green" : "red";
    }
  };

  return (
    <div key={ticker} className="table__grid" data-testid="ticker-element">
      <span className="table__grid_element" data-testid="exchange">
        {exchange}
      </span>
      <span className="table__grid_element" data-testid="ticker">
        {ticker}
      </span>
      <span className="table__grid_element" data-testid="price">
        {price}
      </span>
      <span className="table__grid_element" data-testid="change">
        {change}
      </span>
      <div
        className={classNames("table__grid_element", renderChangeColor(vector))}
        data-testid="change-percent"
      >
        {parseInt(change_percent * 100) + "%"}
      </div>
      <span className="table__grid_element" data-testid="dividend">
        {dividend}
      </span>
      <span className="table__grid_element" data-testid="yield">
        {tickerYield}
      </span>
    </div>
  );
};

export default TickersElement;
