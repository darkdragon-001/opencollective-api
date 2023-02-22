import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLDateTime } from 'graphql-scalars';

import { TransactionKind } from '../enum/TransactionKind';
import { getTimeSeriesFields, TimeSeries } from '../interface/TimeSeries';

import { GraphQLAmount } from './Amount';

const GraphQLTimeSeriesAmountWithKindNodes = new GraphQLObjectType({
  name: 'TimeSeriesAmountWithKindNode',
  fields: () => ({
    date: { type: new GraphQLNonNull(GraphQLDateTime) },
    amount: { type: new GraphQLNonNull(GraphQLAmount) },
    kind: { type: new GraphQLNonNull(TransactionKind) },
  }),
});

export const GraphQLTimeSeriesAmountWithKind = new GraphQLObjectType({
  name: 'TimeSeriesAmountWithKind',
  description: 'Amounts with settlements time series',
  interfaces: [TimeSeries],
  fields: () => ({
    ...getTimeSeriesFields(),
    nodes: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLTimeSeriesAmountWithKindNodes))),
      description: 'Time series data points',
    },
  }),
});
