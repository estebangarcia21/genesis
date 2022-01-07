import { gql } from 'apollo-server';
import { genesisGenerator } from '../../wasm';

export const typeDefs = gql`
  type Artifact {
    source: String!
    path: String
  }

  type CreateRestApiOutput {
    artifacts: [Artifact]!
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
    Port to run the server on
    """
    port: Int!
    """
    The schema for the API
    """
    schema: String
  }

  type Query {
    projects: [Artifact]
  }

  type Mutation {
    createRestApi(input: CreateRestApiInput): CreateRestApiOutput
  }
`;

export const resolvers = {
  Mutation: {
    createRestApi: (_: any, { input: { name, port } }: any) => {
      return {
        artifacts: JSON.parse(
          genesisGenerator.generate_express_api(JSON.stringify({ name, port }))
        ),
        cloneEndpoint: 'https://clone.github.com'
      };
    }
  }
};
