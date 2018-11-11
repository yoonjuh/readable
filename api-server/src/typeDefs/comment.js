import { gql } from "apollo-server-express";

export default gql`
  scalar Date

  extend type Query {
    comment(postId: ID!): [Comment!]!
    allComments: [Comment!]!

  }
  extend type Mutation {
    addComment(body: String!, author: String!, postId: String!): Comment
    deleteComment(id: ID!): Comment
    upVoteComment(id: ID!): Comment
    downVoteComment(id: ID!): Comment
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
