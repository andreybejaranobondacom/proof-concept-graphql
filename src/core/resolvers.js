'use strict';

/**
 * Merged all resolver modules an return resolvers merged
 */
const path = require('path');
const { fileLoader, mergeResolvers } = require('merge-graphql-schemas');

const resolversArray = fileLoader(path.join(__dirname, '../modules/**/Resolver.js'));

module.exports = mergeResolvers(resolversArray);
