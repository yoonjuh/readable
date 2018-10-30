import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    author: String,
    category: String,
    voteScore: {
      type: Number,
      default: 0
    },
    deleted: {
      type: Boolean,
      default: false
    },
    creactedAt: Date,
    updatedAt: Date
  },
  {
    timestamps: true
  }
);

export default mongoose.model("post", postSchema);
