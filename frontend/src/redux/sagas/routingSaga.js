import { takeEvery } from "redux-saga";
import { take, call, put, all, fork, select } from "redux-saga/effects";
import * as types from "../constants";
import { addPost } from "../../utils/api";

function* handleAddPost(action) {
  console.log("Inside of handleAddPost");
  const post = yield call(addPost, action.post);

  yield put({
    type: types.ADD_POST_SUCCESS,
    post
  });
}

function* watchAddPostRequest() {
  console.log("wathcers for AddPost");
  yield takeEvery(types.ADD_POST, handleAddPost);
}

export default function* routeingSaga() {
  console.log("RoutingSaga!!");
  yield [fork(watchAddPostRequest)];
}
