import gql from "graphql-tag";

export const GET_ALL_POST = gql`
  {
    posts {
      id
      title
      body
      author
      category
      createdAt
      updatedAt
      voteScore
      deleted
    }
  }
`;
