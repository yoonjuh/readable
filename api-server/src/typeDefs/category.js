import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    category(name: String!): category
    categories: [category!]!
  }
  type category {
    name: String!
  }
`;
