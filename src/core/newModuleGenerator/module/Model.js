'use strict';

/**
 *@name
 * Class for the model brings data returned by connector and models
 * Includes dependencies and creates methods for funcionality
 */
const Connector = require('./Connector');
const connector = new Connector();

class Model {
  /**
   * this is method method example, replace logic for new module
  */
  async get() {
    const dataExample = await connector.get();
    return dataExample.data;
  }
}

module.exports = Model;
