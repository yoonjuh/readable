import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ADD_POST, ADD_POST_SUCCESS } from "../constants";

import { addPost } from "../../utils/api";

function* addPostSaga(action) {
  console.log(`Saga took the request ${action.post}`);
  const post = yield call(addPost, action.post);

  yield put({
    type: ADD_POST_SUCCESS,
    post
  });
}
/*
  Unlike takeEvery, takeLatest allows only one take(given function) to run at a moment*
  * */
const postSaga = [takeLatest(ADD_POST, addPostSaga)];

export default postSaga;
