'use strict';

/**
 * Merged all resolver modules an return resolvers merged
 */
const path = require('path');
const { mergeResolvers } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');

const resolversArray = loadFilesSync(path.join(__dirname, '../modules/**/Resolver.js'));

module.exports = mergeResolvers(resolversArray);
