import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    name: String
  }

  type Mutation {
    createUser(name: String!): User
  }
`;
