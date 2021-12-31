export interface SchemaExport {
  typeDefs: string;
  resolvers: ResolverConfig;
}

export type ResolverConfig = Record<string, Record<string, any>>;
