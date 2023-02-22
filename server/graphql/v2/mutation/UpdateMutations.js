import { GraphQLNonNull, GraphQLString } from 'graphql';

import { createUpdate, deleteUpdate, editUpdate, publishUpdate, unpublishUpdate } from '../../common/update';
import { UpdateAudienceType } from '../enum';
import { UpdateCreateInput } from '../input/UpdateCreateInput';
import { UpdateUpdateInput } from '../input/UpdateUpdateInput';
import GraphQLUpdate from '../object/Update';

const updateMutations = {
  createUpdate: {
    type: new GraphQLNonNull(GraphQLUpdate),
    description: 'Create update. Scope: "updates".',
    args: {
      update: {
        type: new GraphQLNonNull(UpdateCreateInput),
      },
    },
    resolve(_, args, req) {
      return createUpdate(_, args, req);
    },
  },
  editUpdate: {
    type: new GraphQLNonNull(GraphQLUpdate),
    description: 'Edit update. Scope: "updates".',
    args: {
      update: {
        type: new GraphQLNonNull(UpdateUpdateInput),
      },
    },
    resolve(_, args, req) {
      return editUpdate(_, args, req);
    },
  },
  publishUpdate: {
    type: new GraphQLNonNull(GraphQLUpdate),
    description: 'Publish update. Scope: "updates".',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString),
      },
      notificationAudience: {
        type: UpdateAudienceType,
      },
    },
    resolve(_, args, req) {
      return publishUpdate(_, args, req);
    },
  },
  unpublishUpdate: {
    type: new GraphQLNonNull(GraphQLUpdate),
    description: 'Unpublish update. Scope: "updates".',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve(_, args, req) {
      return unpublishUpdate(_, args, req);
    },
  },
  deleteUpdate: {
    type: new GraphQLNonNull(GraphQLUpdate),
    description: 'Delete update. Scope: "updates".',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve(_, args, req) {
      return deleteUpdate(_, args, req);
    },
  },
};

export default updateMutations;
