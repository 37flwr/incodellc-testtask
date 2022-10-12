import { all, fork } from "redux-saga/effects";

// Sagas
import tickerSaga from "./tickers/saga";

export default function* rootSaga() {
  yield all([
    //ticker
    fork(tickerSaga),
  ]);
}
