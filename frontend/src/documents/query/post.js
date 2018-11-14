import gql from 'graphql-tag';

export const GET_ALL_POST = gql`
  {
    posts {
      id
      title
      body
      author
      category
      comments {
        id
        postId
        deleted
        author
        createdAt
        updatedAt
        body
      }
      createdAt
      updatedAt
      voteScore
      deleted
    }
  }
`;
