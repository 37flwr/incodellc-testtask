import { all, fork } from "redux-saga/effects";

// Sagas
import tickerSaga from "./tickers/saga";
import intervalSaga from "./interval/saga";

export default function* rootSaga() {
  yield all([
    //ticker
    fork(tickerSaga),

    //ticker
    fork(intervalSaga),
  ]);
}
