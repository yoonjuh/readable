import { gql } from "apollo-server-express";

export default gql`
  scalar Date

  extend type Query {
    post(id: ID!): Post
    posts: [Post!]!
  }
  extend type Mutation {
    addPost(
      category: String!
      title: String!
      body: String!
      author: String!
    ): Post
  }
  type Post {
    id: ID!
    title: String!
    body: String!
    author: String!
    category: String!
    voteScore: Int
    deleted: Boolean!
    createdAt: Date!
    updatedAt: Date!
  }
`;
