'use strict';

const request = require('request-promise');

const config = require('../../config');

class Connector {
  async get() {
    try {
      const url = config.endpoints.images;
      const options = {
        method: 'GET',
        uri: url,
        json: true,
        resolveWithFullResponse: true
      };
      const response = await request(options);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

module.exports = Connector;
