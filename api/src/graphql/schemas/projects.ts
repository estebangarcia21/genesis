import { gql } from 'apollo-server';

export const typeDefs = gql`
  type GeneratedProject {
    framework: String
    base64Content: String
  }

  type Query {
    projects: [GeneratedProject]
  }

  type Mutation {
    generateProject: GeneratedProject!
  }
`;

export const resolvers = {
  Mutation: {
    generateProject: () => {
      return {
        framework: 'Yuh',
        base64Content: '$xiug'
      };
    }
  }
};
