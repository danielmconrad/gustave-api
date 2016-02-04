'use strict'

import {
  GraphQLFloat,
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';

import {ThingToDo} from './thing-to-do'
import locationResultsStub from '../../stubs/nearby'

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    nearby: {
      type: new GraphQLList(ThingToDo),
      args: {
        lat: {
          name: 'lat',
          type: GraphQLFloat,
        },
        lng: {
          name: 'lng',
          type: GraphQLFloat,
        }
      },
      resolve(parent, args) {
        return locationResultsStub.results
      }
    }
  })
});

export const Schema = new GraphQLSchema({
  query: Query
});
