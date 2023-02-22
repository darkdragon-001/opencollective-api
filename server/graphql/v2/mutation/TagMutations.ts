import type { Request } from 'express';
import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

import models from '../../../models';
import { canEditExpenseTags } from '../../common/expenses';
import { NotFound, Unauthorized } from '../../errors';
import { ExpenseReferenceInput, fetchExpenseWithReference } from '../input/ExpenseReferenceInput';
import { fetchOrderWithReference, OrderReferenceInput } from '../input/OrderReferenceInput';
import { GraphQLExpense } from '../object/Expense';
import { GraphQLOrder } from '../object/Order';

const GraphQLTagResponse = new GraphQLObjectType({
  name: 'TagResponse',
  fields: () => ({
    order: {
      type: GraphQLOrder,
    },
    expense: {
      type: GraphQLExpense,
    },
  }),
});

const tagMutations = {
  setTags: {
    type: new GraphQLNonNull(GraphQLTagResponse),
    args: {
      tags: {
        type: new GraphQLList(GraphQLString),
        description: 'Tags associated with the object being updated',
      },
      order: {
        type: OrderReferenceInput,
      },
      expense: {
        type: ExpenseReferenceInput,
      },
    },
    resolve: async (_: void, args, req: Request) => {
      if (!req.remoteUser) {
        throw new Unauthorized();
      }

      if ([args.order, args.expense].filter(Boolean).length !== 1) {
        throw new Error('A single order or expense must be provided');
      }

      if (args.order) {
        const order = await fetchOrderWithReference(args.order, {
          throwIfMissing: true,
          include: [{ model: models.Collective, as: 'collective' }],
        });
        if (!req.remoteUser.isAdminOfCollectiveOrHost(order.collective)) {
          throw new Unauthorized();
        }

        await order.update({ tags: args.tags });

        return order;
      } else if (args.expense) {
        const expense = await fetchExpenseWithReference(args.expense, { throwIfMissing: true });
        await canEditExpenseTags(req, expense, { throw: true });

        await expense.update({ tags: args.tags });

        return expense;
      }

      throw new NotFound();
    },
  },
};

export default tagMutations;
