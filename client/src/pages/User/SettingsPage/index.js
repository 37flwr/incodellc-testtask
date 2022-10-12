import React, { useState } from "react";
import classNames from "classnames";
import { tickers as defaultTickers } from "../../../utils/helper";
import { useSelector, useDispatch } from "react-redux";
import { tickerActions } from "../../../store/ducks/tickers";
import { intervalActions } from "../../../store/ducks/interval";
import ActionButton from "../../../components/buttons/ActionButton";
import "./styles.scss";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const { tickers } = useSelector((state) => state.Tickers);
  const { interval } = useSelector((state) => state.Interval);

  const [intervalValue, setIntervalValue] = useState(interval);
  return (
    <div className="settings-page">
      <div className="tickers-selection settings-section">
        <span className="section-heading">Tickers list</span>
        {defaultTickers.map((dt) => (
          <div
            className={classNames(
              tickers.includes(dt) && "active",
              "ticker-item"
            )}
            key={dt}
          >
            <span
              className={classNames(
                tickers.includes(dt) ? "ticker-text__active" : "ticker-text"
              )}
            >
              {dt}
            </span>
            {tickers.includes(dt) ? (
              <ActionButton
                onClick={() => dispatch(tickerActions.removeTicker(dt))}
              >
                Remove
              </ActionButton>
            ) : (
              <ActionButton
                onClick={() => dispatch(tickerActions.addTicker(dt))}
              >
                Add
              </ActionButton>
            )}
          </div>
        ))}
      </div>
      <form
        className="interval-selection settings-section"
        onSubmit={() => dispatch(intervalActions.changeInterval(intervalValue))}
      >
        <label htmlFor="interval-selection" className="section-heading">
          Current interval
        </label>
        <input
          type="text"
          id="interval-selection"
          value={intervalValue}
          onChange={({ target }) => setIntervalValue(target.value)}
        />
        <button type="submit">Change</button>
      </form>
    </div>
  );
};

export default SettingsPage;
