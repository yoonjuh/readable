import { ADD_POST } from "../constants";

export const addPost = post => ({
  type: ADD_POST,
  post
});
