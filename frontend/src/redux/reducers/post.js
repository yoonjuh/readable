import { ADD_POST_SUCCESS } from "../constants";

export default function postReducer(state = {}, action) {
  switch (action.type) {
    case ADD_POST_SUCCESS: {
      console.log(action);
    }

    default:
      return state;
  }
}
