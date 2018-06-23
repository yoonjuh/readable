const { mongoose } = require("../../db/mongoose.js");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  body: String,
  author: String,
  voteScore: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  comments: [{ commentTitle: String, body: String, date: Date, default: {} }]
});

const Post = mongoose.model("Post", postSchema);

module.exports = {
  Post
};
