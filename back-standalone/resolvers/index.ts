import pkg from 'lodash';
const { mapValues } = pkg;
import { pubsub } from '../locals.js'

export const resolversObjects = {
  Query: {
    helloQuery: () => 'Hello Query',
  },
  Mutation: {
    helloMutation: () => 'Hello Mutation',
  },
  Subscription: {
    getMessages: {
      subscribe: () => pubsub.asyncIterator(['GET_MESSAGES']),
    },
  },
}

export const allResolvers = mapValues(resolversObjects, (entries) => mapValues(entries))
