import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    author: String,
    category: String,
    voteScore: Number,
    deleted: Boolean,
    creactedAt: Date,
    updatedAt: Date
  },
  {
    timestamps: true
  }
);

export default mongoose.model("post", postSchema);
