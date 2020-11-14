'use strict';

const { ApolloServer } = require('apollo-server-express');

const schema = require('./schema');

const server = new ApolloServer({ schema });

module.exports = server;
