import { SET_SORT_METHOD } from "../constants";

const initialState = "date";

export default function sortReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SORT_METHOD: {
      return action.sortMethod;
    }
    default:
      return state;
  }
}
