'use strict';

/**
 * Create endpoints for module, Query or Mutation
 */
const Model = require('./Model');
const model = new Model();

module.exports = {
  Query: {
    images: () => model.get()
  }
};
