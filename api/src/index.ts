import { ApolloServer } from 'apollo-server';
import { schema } from './graphql';

async function main() {
  const server = new ApolloServer({ schema });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

main().catch(console.log);
