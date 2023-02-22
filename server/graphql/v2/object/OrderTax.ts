import { GraphQLInt, GraphQLNonNull, GraphQLObjectType } from 'graphql';

import { OrderTaxType } from '../enum/OrderTaxType';

export const GraphQLOrderTax = new GraphQLObjectType({
  name: 'OrderTax',
  fields: () => {
    return {
      type: {
        type: new GraphQLNonNull(OrderTaxType),
      },
      percentage: {
        type: new GraphQLNonNull(GraphQLInt),
      },
    };
  },
});
