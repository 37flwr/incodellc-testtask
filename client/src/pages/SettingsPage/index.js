import React, { useState } from "react";
import classNames from "classnames";
import { tickers as defaultTickers } from "../../utils/helper";
import { useSelector, useDispatch } from "react-redux";
import tickerActions from "../../store/ducks/tickers/actions";
import intervalActions from "../../store/ducks/interval/actions";
import ActionButton from "../../components/buttons/ActionButton";
import "./styles.scss";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const { tickers } = useSelector((state) => state.Tickers);
  const { interval } = useSelector((state) => state.Interval);
  console.log(interval);

  const [intervalValue, setIntervalValue] = useState(interval);
  return (
    <div className="settings-page">
      <div className="tickers-selection">
        {defaultTickers.map((dt) => (
          <div
            className={classNames(
              tickers.includes(dt) && "active",
              "ticker-item"
            )}
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
      <div className="interval-selection">
        <form
          onSubmit={() =>
            dispatch(intervalActions.changeInterval(intervalValue))
          }
        >
          <input
            type="text"
            value={intervalValue}
            onChange={({ target }) => setIntervalValue(target.value)}
          />
          <button type="submit">Change</button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
