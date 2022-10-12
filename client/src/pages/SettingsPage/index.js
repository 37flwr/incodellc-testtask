import React from "react";
import classNames from "classnames";
import { tickers as defaultTickers } from "../../utils/helper";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../store/ducks/tickers/actions";
import ActionButton from "../../components/buttons/ActionButton";
import "./styles.scss";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const { tickers } = useSelector((state) => state.Tickers);
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
              <ActionButton onClick={() => dispatch(actions.removeTicker(dt))}>
                Remove
              </ActionButton>
            ) : (
              <ActionButton onClick={() => dispatch(actions.addTicker(dt))}>
                Add
              </ActionButton>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
