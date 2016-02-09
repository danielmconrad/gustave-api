'use strict';

import {
  GraphQLFloat,
  GraphQLID,
  GraphQLObject,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export const ThingToDoLocationType = new GraphQLObjectType({
  name: 'ThingToDoLocation',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    address: {
      type: GraphQLString
    },
    lat: {
      type: GraphQLFloat
    },
    lng: {
      type: GraphQLFloat
    }
  })
});


export const ThingToDoType = new GraphQLObjectType({
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
      type: ThingToDoLocationType
    }
  })
});

