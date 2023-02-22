import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';

import { Collection, CollectionFields } from '../interface/Collection';
import GraphQLUpdate from '../object/Update';

export const UpdatesCollection = new GraphQLObjectType({
  name: 'UpdatesCollection',
  interfaces: [Collection],
  description: 'A collection of "Updates"',
  fields: () => {
    return {
      ...CollectionFields,
      nodes: {
        type: new GraphQLList(new GraphQLNonNull(GraphQLUpdate)),
      },
    };
  },
});
