import { Comment } from "../models";

export default {
  Query: {
    comments: (root, args, context, info) => {
      return Comment.find({});
    }
  },
  Mutation: {
    addComment: (root, args, context, info) => {
      return Post.create(args);
    },
    deleteComment: (root, args, context, info) => {
      Comment.findByIdAndDelete({ _id: args.id }, err => {
        if (err) {
          console.error(err);
        }
        return args.id;
      });
    }
  }
};
