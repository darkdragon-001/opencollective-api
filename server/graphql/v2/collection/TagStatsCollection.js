import { GraphQLList, GraphQLObjectType } from 'graphql';

import { Collection, CollectionFields } from '../interface/Collection';
import { GraphQLTagStats } from '../object/TagStats';

export const TagStatsCollection = new GraphQLObjectType({
  name: 'TagStatsCollection',
  interfaces: [Collection],
  description: 'A collection of "Tags"',
  fields: () => {
    return {
      ...CollectionFields,
      nodes: {
        type: new GraphQLList(GraphQLTagStats),
      },
    };
  },
});
