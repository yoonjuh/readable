const { mongoose } = require('../../db/mongoose');

const Schema = mongoose.Schema;

const categorySchema = mongoose.Schema({
  category: String,
});

const Category = mongoose.model('Category', categorySchema);

module.exports = {
  Category,
};
