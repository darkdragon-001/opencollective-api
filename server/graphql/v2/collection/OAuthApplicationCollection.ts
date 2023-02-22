import { GraphQLList, GraphQLObjectType } from 'graphql';

import { Collection, CollectionFields } from '../interface/Collection';
import { GraphQLApplication } from '../object/Application';

export const OAuthApplicationCollection = new GraphQLObjectType({
  name: 'OAuthApplicationCollection',
  interfaces: [Collection],
  description: 'A collection of "Application"',
  fields: () => ({
    ...CollectionFields,
    nodes: {
      type: new GraphQLList(GraphQLApplication),
    },
  }),
});
