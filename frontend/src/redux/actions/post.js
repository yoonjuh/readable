import { ADD_POST } from "../constants";

export const addPost = post => {
  console.log(`Action took the request, ${JSON.stringify(post)}`);
  return {
    type: ADD_POST,
    post
  };
};
