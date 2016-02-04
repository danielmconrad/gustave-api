'use strict';

import {
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLID,
  GraphQLList,
  GraphQLString
} from 'graphql';

import {ThingToDo} from './thing-to-do'
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
    thingsToDo: {
      type: new GraphQLList(ThingToDo),
      resolve(parent, args) {
        return locationResultsStub.results
      }
    }
  })
});
