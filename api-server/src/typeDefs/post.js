import { gql } from "apollo-server-express";

export default gql`
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
    timestamp: Int
    title: String!
    body: String!
    author: String!
    category: String!
    voteScore: Int
    deleted: Boolean!
    commentCount: Int!
  }
`;
