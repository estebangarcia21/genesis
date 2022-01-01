import { gql } from 'apollo-server';
import { genesisGenerator } from '../../wasm';

export const typeDefs = gql`
  type ProjectArtifact {
    base64: String!
    cloneEndpoint: String
  }

  input CreateRestApiInput {
    """
    The name of the API
    """
    name: String!
    """
    The description of the project
    """
    description: String
    """
    The schema for the API
    """
    schema: String
  }

  type Query {
    projects: [ProjectArtifact]
  }

  type Mutation {
    createRestApi(input: CreateRestApiInput): ProjectArtifact
  }
`;

export const resolvers = {
  Mutation: {
    createRestApi: (_: any, { input: { schema } }: any) => {
      return {
        base64: genesisGenerator
          .generate_rest_api(
            JSON.stringify({
              port: 3000
            })
          )
          .toString(),
        cloneEndpoint: 'https://clone.github.com'
      };
    }
  }
};
