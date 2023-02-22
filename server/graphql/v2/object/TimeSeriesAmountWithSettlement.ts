import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { GraphQLDateTime } from 'graphql-scalars';

import { TransactionSettlementStatus } from '../enum/TransactionSettlementStatus';
import { getTimeSeriesFields, TimeSeries } from '../interface/TimeSeries';

import { GraphQLAmount } from './Amount';

const GraphQLTimeSeriesAmountWithSettlementNodes = new GraphQLObjectType({
  name: 'TimeSeriesAmountWithSettlementNode',
  fields: () => ({
    date: { type: new GraphQLNonNull(GraphQLDateTime) },
    amount: { type: new GraphQLNonNull(GraphQLAmount) },
    settlementStatus: { type: new GraphQLNonNull(TransactionSettlementStatus) },
  }),
});

export const GraphQLTimeSeriesAmountWithSettlement = new GraphQLObjectType({
  name: 'TimeSeriesAmountWithSettlement',
  description: 'Amounts with settlements time series',
  interfaces: [TimeSeries],
  fields: () => ({
    ...getTimeSeriesFields(),
    nodes: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLTimeSeriesAmountWithSettlementNodes))),
      description: 'Time series data points',
    },
  }),
});
