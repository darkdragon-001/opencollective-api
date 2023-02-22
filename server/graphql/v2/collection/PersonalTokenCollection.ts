import { GraphQLList, GraphQLObjectType } from 'graphql';

import { Collection, CollectionFields } from '../interface/Collection';
import { GraphQLPersonalToken } from '../object/PersonalToken';

export const PersonalTokenCollection = new GraphQLObjectType({
  name: 'PersonalTokenCollection',
  interfaces: [Collection],
  description: 'A collection of "PersonalToken"',
  fields: () => ({
    ...CollectionFields,
    nodes: {
      type: new GraphQLList(GraphQLPersonalToken),
    },
  }),
});
