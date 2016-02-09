'use strict';

import {
  GraphQLFloat,
  GraphQLID,
  GraphQLObject,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

import {
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
  toGlobalId
} from 'graphql-relay-js';

var {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    return data[type][id];
  },
  (obj) => {
    return obj.ships ? factionType : shipType;
  }
);

var ThingToDoLocationType = new GraphQLObjectType({
  name: 'ThingToDoLocation',
  fields: () => ({
    id: globalIdField(),
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
  }),
  interfaces: [nodeInterface]
});

var ThingToDoType = new GraphQLObjectType({
  name: 'ThingToDo',
  fields: () => ({
    id: globalIdField(),
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
