import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    post(id: ID!): Post
    comments: [Comment]
    posts: [Post!]
  }
  extend type Mutation {
    addPost(
      category: String!
      title: String!
      body: String!
      author: String!
    ): Post!
    deletePost(id: ID!): Post
    upVotePost(id: ID!): Post!
    downVotePost(id: ID!): Post!

  }
  type Post {
    id: ID!
    voteScore: Int
    deleted: Boolean!
    category: String!
    comments: [Comment]
    title: String!
    body: String!
    author: String!
    createdAt: Date!
    updatedAt: Date!
  }
`;

