'use strict';

/**
 * Merged all typeDefs modules an return typeDefs merged
 */
const path = require('path');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typesArray = loadFilesSync(path.join(__dirname, '../modules/**/*.graphql'));

const typeDefs = mergeTypeDefs(typesArray, { all: true });

module.exports = typeDefs;
