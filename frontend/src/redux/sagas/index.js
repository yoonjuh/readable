import { takeEvery } from "redux-saga/effects";

import * as types from "../constants";
import { addPostSaga } from "./post";
import routingSaga from "./routingSaga";

export default function* rootSaga() {
  console.log("Inside of rootSaga");
  yield takeEvery(types.ADD_POST, addPostSaga);
}
