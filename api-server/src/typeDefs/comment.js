import { gql } from "apollo-server-express";

export default gql`
  scalar Date

  extend type Query {
    comments(postId: ID!): [Comment!]!
  }
  extend type Mutation {
    addComment(body: String!, author: String!): Comment
    deleteComment(id: ID!): Comment
  }
  type Comment {
    id: ID!
    postId: String!
    voteScore: Int
    deleted: Boolean!
    body: String!
    author: String!
    createdAt: Date!
    updatedAt: Date!
  }
`;
