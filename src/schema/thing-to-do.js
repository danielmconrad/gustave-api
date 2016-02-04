'use strict';

import {
  GraphQLFloat,
  GraphQLID,
  GraphQLObject,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

import {Location} from './location';

export const ThingToDo = new GraphQLObjectType({
  name: 'ThingToDo',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    image: {
      type: GraphQLString
    },
    location: {
      type: Location
    }
  })
});