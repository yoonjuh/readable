import { all } from "redux-saga/effects";
import postSaga from "./post";

export default function* rootSaga() {
  yield all([...postSaga]);
}
