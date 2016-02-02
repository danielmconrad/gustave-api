'use strict'

import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} from 'graphql';

const User = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    }
  })
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    viewer: {
      type: User,
      resolve() {
        return {
          id: '123',
          name: 'freiksenet'
        }
      }
    }
  })
});

export const Schema = new GraphQLSchema({
  query: Query
});

// graphql(Schema, '{viewer {id, name}}').then(result => {
//   console.log(result);
// });