import fs from 'fs';
import path from 'path';
import { mergeSchemas, makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';
import { SchemaExport } from './types';

function readSchema(): GraphQLSchema {
  const files = fs
    .readdirSync(path.join(__dirname, 'schemas'))
    .map((file) => file.replace('.js', ''));

  const schemaExports: SchemaExport[] = files.map((f) => {
    const { typeDefs = '', resolvers = {} } = require(`./schemas/${f}`);

    return { typeDefs, resolvers };
  });

  return mergeSchemas({ schemas: schemaExports.map(makeExecutableSchema) });
}

export const schema = readSchema();
