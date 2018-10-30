import gql from "graphql-tag";

export const GET_ALL_CATEGORIES = gql`
  {
    categories {
      name
    }
  }
`;
