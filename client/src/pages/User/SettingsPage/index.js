import { useState } from "react";
import classNames from "classnames";
import {
  tickers as defaultTickers,
  validateAndFormatInterval,
} from "../../../utils/helper";
import { useSelector, useDispatch } from "react-redux";
import { tickerActions } from "../../../store/ducks/tickers";
import { intervalActions } from "../../../store/ducks/interval";
import ActionButton from "../../../components/buttons/ActionButton";
import "./styles.scss";
import { useToasts } from "../../../hooks";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const { tickers } = useSelector((state) => state.Tickers);
  const { interval } = useSelector((state) => state.Interval);

  const [intervalValue, setIntervalValue] = useState(interval);

  const { updateToasts } = useToasts();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error, result } = validateAndFormatInterval(
      intervalValue,
      interval
    );
    if (error) return updateToasts("error", error);
    updateToasts(
      "success",
      `Interval time has been changed from ${interval} to ${result}`
    );
    dispatch(intervalActions.changeInterval(result));
  };

  return (
    <div className="settings-page">
      <div
        className="tickers-selection settings-section"
        data-testid="ticker-selection"
      >
        <span className="section-heading">Tickers list</span>
        {defaultTickers.map((dt) => (
          <div
            className={classNames(
              tickers.includes(dt) && "active",
              "ticker-item"
            )}
            data-testid="ticker-selection-item"
            key={dt}
          >
            <span
              className={classNames(
                tickers.includes(dt) ? "ticker-text_active" : "ticker-text"
              )}
            >
              {dt}
            </span>
            {tickers.includes(dt) ? (
              <ActionButton
                type="submit"
                onClick={() => dispatch(tickerActions.removeTicker(dt))}
              >
                Remove
              </ActionButton>
            ) : (
              <ActionButton
                type="submit"
                onClick={() => dispatch(tickerActions.addTicker(dt))}
              >
                Add
              </ActionButton>
            )}
          </div>
        ))}
      </div>
      <form
        name="interval-selection"
        className="interval-selection settings-section"
        onSubmit={(e) => handleSubmit(e)}
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
        <ActionButton type="submit">Change</ActionButton>
      </form>
    </div>
  );
};

export default SettingsPage;
