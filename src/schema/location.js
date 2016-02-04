'use strict';

import {
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export const Location = new GraphQLObjectType({
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
