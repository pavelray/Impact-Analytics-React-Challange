import { all, call } from "redux-saga/effects";
import { dataSagas } from "./sagas/sagas";

export default function* rootSaga() {
  yield all([call(dataSagas)]);
}
