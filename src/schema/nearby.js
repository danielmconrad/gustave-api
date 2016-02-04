'use strict';

import {
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLID,
  GraphQLList,
  GraphQLString
} from 'graphql';

import {PlaceOrEvent} from './place-or-event'
import locationResultsStub from '../../stubs/nearby'

export const Nearby = new GraphQLObjectType({
  name: 'Nearby',
  fields: () => ({
    lat: {
      type: GraphQLFloat
    },
    lng: {
      type: GraphQLFloat
    },
    placesOrEvents: {
      type: new GraphQLList(PlaceOrEvent),
      resolve(parent, args) {
        return locationResultsStub.results
      }
    }
  })
});
