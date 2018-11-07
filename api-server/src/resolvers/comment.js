import { Comment } from "../models";

export default {
  Query: {
    comment: (root, args, context, info) => {
      return Comment.find({_id: args.postId});
    }
  },
  Mutation: {
    addComment: (root, args, context, info) => {

      return Comment.create(args);
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
