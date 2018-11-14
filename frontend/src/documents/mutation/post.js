import gql from 'graphql-tag';

export const ADD_POST = gql`
  mutation AddPost(
    $category: String!
    $title: String!
    $body: String!
    $author: String!
  ) {
    addPost(category: $category, title: $title, body: $body, author: $author) {
      id
      voteScore
      deleted
      category
      title
      body
      author
      createdAt
      updatedAt
    }
  }
`;
export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;
