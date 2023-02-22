import { Account } from './interface/Account';
import { FileInfo } from './interface/FileInfo';
import { GraphQLAmount } from './object/Amount';
import { GraphQLApplication } from './object/Application';
import { GraphQLBot } from './object/Bot';
import { GraphQLCollective } from './object/Collective';
import { GraphQLCredit } from './object/Credit';
import { GraphQLDebit } from './object/Debit';
import { GraphQLEvent } from './object/Event';
import { GraphQLGenericFileInfo } from './object/GenericFileInfo';
import { GraphQLImageFileInfo } from './object/ImageFileInfo';
import { GraphQLIndividual } from './object/Individual';
import { GraphQLMember, GraphQLMemberOf } from './object/Member';
import { GraphQLOrganization } from './object/Organization';
import { GraphQLTransferWise } from './object/TransferWise';
import { GraphQLVendor } from './object/Vendor';
import { GraphQLVirtualCard } from './object/VirtualCard';

const types = [
  GraphQLApplication,
  Account,
  GraphQLAmount,
  GraphQLBot,
  GraphQLCollective,
  GraphQLCredit,
  GraphQLDebit,
  GraphQLEvent,
  FileInfo,
  GraphQLImageFileInfo,
  GraphQLGenericFileInfo,
  GraphQLIndividual,
  GraphQLMember,
  GraphQLMemberOf,
  GraphQLOrganization,
  GraphQLTransferWise,
  GraphQLVendor,
  GraphQLVirtualCard,
];

export default types;
