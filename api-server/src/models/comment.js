import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    postId: String,
    body: String,
    author: String,
    voteScore: {
      type: Number,
      default: 0
    },
    deleted: {
      type: Boolean,
      default: false
    },
    createdAt: Date,
    updatedAt: Date
  },
  { timestamps: true }
);

export default mongoose.model("comment", commentSchema);
