import { gql } from 'apollo-server-express';

export const schema = `
  type User {
    id: ID
    email: String!
    first_name: String!
    last_name: String!
    avatar: String
    posts: [Post]
  }
  
  type Post {
    id: ID
    title: String!
    content: String
  }
  
  input UserInput {
    email: String!
    first_name: String!
    last_name: String!
    avatar: String
    posts: [PostInput]
  }
  
  input PostInput {
    title: String!
    content: String!
  }
`;

export const schemaExample = gql`
  type User {
    id: String
    user_id: String
    name: String
    email_verified: Boolean
    picture: String
    user_metadata: Metadata
    nickname: String!
    journalId: String!
    email: String!
  }

  type Metadata {
    coachId: String
    coachEmail: String
    isTemplateCreated: Boolean
    coachees: [MetadataCoachee]
  }

  type MetadataCoachee {
    id: String
    nickname: String
    journalId: String
    email: String
  }

  type Goal {
    id: ID!
    sequence: Int!
    description: String!
    journal: String!
    createdDate: Date!
    status: Status!
    progress: Int!
    lastUpdatedDate: Date!
    iconColor: String!
    iconBackgroundColor: String!
  }

  input GoalInput {
    id: ID
    sequence: Int!
    previousSequence: Int
    description: String!
    journal: String!
    createdDate: Date!
    status: Status!
    progress: Int!
    lastUpdatedDate: Date!
    iconColor: String!
    iconBackgroundColor: String!
  }
`;
