'use strict';

const Connector = require('./Connector');
const connector = new Connector();

class Model {
  async get() {
    const response = await connector.get();
    return response.body.data;
  }
}

module.exports = Model;
