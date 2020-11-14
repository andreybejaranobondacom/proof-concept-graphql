'use strict';

// Loading enviroment variables
require('dotenv').config();

const app = require('express')();

// Configuration of enviroment
const config = require('./config');

// Instance of GraphQL
const graphql = require('./core/graphql');

graphql.applyMiddleware({ app });

// Start server
app.listen(config.port, () => {
  console.log(`Go to http://localhost:${config.port}${graphql.graphqlPath} to run queries! "enviroment": ${config.env}`);
});
