import { Category } from "../models";

export default {
  Query: {
    categories: (root, args, context, info) => {
      return Category.find({});
    },
    category: (root, args, context, info) => {}
  }
};
