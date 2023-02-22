import { GraphQLNonNull } from 'graphql';

import { fetchOrderWithReference, OrderReferenceInput } from '../input/OrderReferenceInput';
import { GraphQLOrder } from '../object/Order';

const OrderQuery = {
  type: GraphQLOrder,
  args: {
    order: {
      type: new GraphQLNonNull(OrderReferenceInput),
      description: 'Identifiers to retrieve the Order',
    },
  },
  async resolve(_, args) {
    return fetchOrderWithReference(args.order);
  },
};

export default OrderQuery;
