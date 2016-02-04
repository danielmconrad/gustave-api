'use strict';

import url from 'url';

import {
  GraphQLFloat,
  GraphQLID,
  GraphQLObject,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

const Location = new GraphQLObjectType({
  name: 'PlaceOrEventLocation',
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

export const PlaceOrEvent = new GraphQLObjectType({
  name: 'PlaceOrEvent',
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