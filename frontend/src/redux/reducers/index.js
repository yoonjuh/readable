import { combineReducers } from "redux";
import postReducer from "./post";
import categoryReducer from "./category";
import sortReducer from "./sort";

export default combineReducers({
  post: postReducer,
  category: categoryReducer,
  sortMethod: sortReducer
});
