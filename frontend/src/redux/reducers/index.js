import { combineReducers } from "redux";
import postReducer from "./post";
import categoryReducer from "./category";

export default combineReducers({
  post: postReducer,
  category: categoryReducer
});
