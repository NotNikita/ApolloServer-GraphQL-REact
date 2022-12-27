import { gql } from "@apollo/client";

export const getUserByPage = gql`
  query GetUsersByPage($page: Int!) {
    getUsersByPage(page: $page) {
      id
      email
      first_name
      last_name
      avatar
      posts {
        id
        title
        content
      }
    }
  }
`;
