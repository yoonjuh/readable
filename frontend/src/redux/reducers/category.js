import { GET_ALL_CATEGORY } from "../constants";

const initialState = {
  category: ["all", "react", "redux", "redux-saga", "graphql"]
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CATEGORY: {
      return { ...state, ...state.category };
    }
    default:
      return state;
  }
}
