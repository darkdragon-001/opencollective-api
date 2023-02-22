import { GraphQLList, GraphQLObjectType } from 'graphql';

import { Collection, CollectionFields } from '../interface/Collection';
import GraphQLHostApplication from '../object/HostApplication';

const HostApplicationCollection = new GraphQLObjectType({
  name: 'HostApplicationCollection',
  interfaces: [Collection],
  description: 'A collection of "HostApplication"',
  fields: () => ({
    ...CollectionFields,
    nodes: {
      type: new GraphQLList(GraphQLHostApplication),
    },
  }),
});

export { HostApplicationCollection };
