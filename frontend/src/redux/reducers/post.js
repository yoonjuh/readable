import { ADD_POST, ADD_POST_SUCCESS } from "../constants";

export default function postReducer(state = {}, action) {
  switch (action.type) {
    case ADD_POST: {
      console.log(action.post);
    }
    case ADD_POST_SUCCESS: {
      console.log(action);
    }

    default:
      return state;
  }
}
