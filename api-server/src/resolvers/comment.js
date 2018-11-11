import { Comment } from "../models";

export default {
  Query: {
    comment: (_, args) => {
      return Comment.find({_id: args.postId});
    },
    allComments: () => {
      return Comment.find({})
    }
  },
  Mutation: {
    addComment: (_, args) => {

      return Comment.create(args);
    },
    deleteComment: (_, { id }) => {
      Comment.findByIdAndDelete({ _id: id }, err => {
        if (err) {
          console.error(err);
        }
        return id;
      });
    },
    upVoteComment: async(_, { id }) => {
      const { voteScore } = await Comment.findOne({_id: id}).exec()

      return Comment.findOneAndUpdate({ _id: id }, { voteScore: voteScore + 1});
    },
    downVoteComment: async (_, { id }) => {
      const { voteScore } = await Comment.findOne({_id: id}).exec()

      return Comment.findOneAndUpdate({ _id: id }, { voteScore: voteScore - 1 });
    }
  }
};
