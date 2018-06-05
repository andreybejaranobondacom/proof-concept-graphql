'use strict';

// Loading enviroment variables
require('dotenv').config();

const app = require('express')();

// Configuration of enviroment
const config = require('./config');

// Routes of GraphQL and GraphiQL
const routes = require('./core/routes');

app.use(routes);

// Start server
app.listen(config.port, () => {
  console.log(`Go to http://localhost:${config.port}/graphiql to run queries! "enviroment": ${config.env}`);
});
