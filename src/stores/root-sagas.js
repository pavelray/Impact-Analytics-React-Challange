import { all, call } from "redux-saga/effects";
import { dataTableSagas } from "./sagas/dataTable.sagas";

export default function* rootSaga() {
  yield all([call(dataTableSagas)]);
}
