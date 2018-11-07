import { Post, Comment } from "../models";
import { filter } from 'lodash'

export default {
  Query: {
    posts: (root, args, context, info) => {
      console.log(root)
      return Post.find({})

    },
    post: (root, args, context, info) => {}
  },
  Post: {
    comments(post) {
      return Comment.find({postId: post._id})
    }
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
