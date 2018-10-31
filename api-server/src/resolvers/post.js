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
    },
    deletePost: (root, args, context, info) => {
      console.log(args);
      Post.findByIdAndDelete({ _id: args.id }, err => {
        if (err) {
          console.error(err);
        }
        return args.id;
      });
    }
  }
};
