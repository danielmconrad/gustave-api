'use strict'

import express from 'express';
import graphqlHTTP from 'express-graphql';
import Schema from './schema'

var app = express();

app.use('/', graphqlHTTP({
  schema: Schema,
  graphiql: true
}));

app.listen(3000, function () {
  console.log('Listening on 3000');
});
