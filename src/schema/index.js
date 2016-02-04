'use strict'

import {
  GraphQLFloat,
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';

import {PlaceOrEvent} from './place-or-event'
import {Nearby} from './nearby'

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    nearby: {
      type: Nearby,
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
        return {
          lat: args.lat,
          lng: args.lng
        }
      }
    }
  })
});

export const Schema = new GraphQLSchema({
  query: Query
});
