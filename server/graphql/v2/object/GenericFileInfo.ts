import { GraphQLObjectType } from 'graphql';

import { FileInfo, fileInfoFields } from '../interface/FileInfo';

export const GraphQLGenericFileInfo = new GraphQLObjectType({
  name: 'GenericFileInfo',
  interfaces: () => [FileInfo],
  fields: () => ({
    ...fileInfoFields,
  }),
});
