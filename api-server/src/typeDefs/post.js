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
    deletePost(id: ID!): Post
  }
  type Post {
    id: ID!
    voteScore: Int
    deleted: Boolean!
    category: String!
    title: String!
    body: String!
    author: String!
    createdAt: Date!
    updatedAt: Date!
  }
`;
