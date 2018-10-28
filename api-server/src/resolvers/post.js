import { Post } from "../models";

export default {
  Query: {
    posts: (root, args, context, info) => {
      return Post.find({});
    },
    post: (root, args, context, info) => {}
  },
  Mutation: {
    addPost: (root, args, context, info) => {
      //TODO args validation,
      return Post.create(args);
    }
  }
};
