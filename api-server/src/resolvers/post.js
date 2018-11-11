import { Post, Comment } from "../models";
import { filter } from 'lodash'

export default {
  Query: {
    posts: (_, args) => {
      return Post.find({})
    },
  },
  Post: {
    comments(post) {
      return Comment.find({postId: post._id})
    },
  },
  Mutation: {
    addPost: (_, args) => {
      //TODO args validation,
      return Post.create(args);
    },
    deletePost: (_, args) => {
      Post.findByIdAndDelete({ _id: args.id }, err => {
        if (err) {
          console.error(err);
        }
        return args.id;
      });
    },
    upVotePost: async(_, { id }) => {
      const { voteScore } = await Post.findOne({_id: id}).exec()
      return Post.findOneAndUpdate({ _id: id }, { voteScore: voteScore + 1})
    },
    downVotePost: async (_, { id }) => {
      const { voteScore } = await post.findOne({_id: id}).exec()
      return Post.findOneAndUpdate({ _id: id }, { voteScore: voteScore - 1 })
    }
  }
};
