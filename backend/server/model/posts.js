const { mongoose } = require('../../db/mongoose.js');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  author: String,
  content: String,
  voteScore: Number,
  date: { type: Date, default: Date.now },
  comments: [{ commentTitle: String, body: String, date: Date }],
});

const Post = mongoose.model('Post', postSchema);

module.exports = {
  Post,
};
