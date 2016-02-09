'use strict'

import {
  GraphQLFloat,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

import {
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
  toGlobalId
} from 'graphql-relay';

import * as _ from 'lodash';
import locationResultsStub from '../../stubs/nearby';

var {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    return _.find(locationResultsStub[type], {id:id});
  },
  (obj) => {
    return obj.lat ? ThingToDoLocationType : ThingToDoType;
  }
);

var ThingToDoLocationType = new GraphQLObjectType({
  name: 'ThingToDoLocation',
  fields: () => ({
    id: globalIdField(),
    name: {type: GraphQLString},
    address: {type: GraphQLString},
    lat: {type: GraphQLFloat},
    lng: {type: GraphQLFloat}
  }),
  interfaces: [nodeInterface]
});

var ThingToDoType = new GraphQLObjectType({
  name: 'ThingToDo',
  fields: () => ({
    id: globalIdField(),
    title: {type: GraphQLString},
    image: {type: GraphQLString},
    location: {
      type: ThingToDoLocationType,
      resolve(thingToDo, args) {
        let id = thingToDo.locationId;
        return _.find(locationResultsStub.ThingToDoLocation, {id:id});
      }
    }
  }),
  interfaces: [nodeInterface]
});

var Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    nearby: {
      type: new GraphQLList(ThingToDoType),
      args: {
        lat: {type: GraphQLFloat},
        lng: {type: GraphQLFloat}
      },
      resolve(nearby, args) {
        return locationResultsStub.ThingToDo
      }
    }
  })
});

export default new GraphQLSchema({
  query: Query
});
