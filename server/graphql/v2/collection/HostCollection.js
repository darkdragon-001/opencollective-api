import { GraphQLList, GraphQLObjectType } from 'graphql';

import { Collection, CollectionFields } from '../interface/Collection';
import { GraphQLHost } from '../object/Host';

const HostCollection = new GraphQLObjectType({
  name: 'HostCollection',
  interfaces: [Collection],
  description: 'A collection of "Hosts"',
  fields: () => {
    return {
      ...CollectionFields,
      nodes: {
        type: new GraphQLList(GraphQLHost),
      },
    };
  },
});

export { HostCollection };
