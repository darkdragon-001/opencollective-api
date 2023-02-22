import { GraphQLList, GraphQLObjectType } from 'graphql';

import { Collection, CollectionFields } from '../interface/Collection';
import { GraphQLExpense } from '../object/Expense';

const ExpenseCollection = new GraphQLObjectType({
  name: 'ExpenseCollection',
  interfaces: [Collection],
  description: 'A collection of "Expenses"',
  fields: () => ({
    ...CollectionFields,
    nodes: {
      type: new GraphQLList(GraphQLExpense),
    },
  }),
});

export { ExpenseCollection };
