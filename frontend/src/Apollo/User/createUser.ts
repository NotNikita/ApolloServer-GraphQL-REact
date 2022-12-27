import { gql } from "@apollo/client";

export const createUser = gql`
  mutation CreateUser($user: UserInput) {
    createUser(user: $user) {
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
