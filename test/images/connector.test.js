'use strict';

const nock = require('nock');

const config = require('../../src/config');

const Connector = require('../../src/modules/images/Connector');

const stubs = require('../stubs/images');

describe('images Service', () => {
  const connector = new Connector();
  it('should get', async () => {
    const data = stubs.get();
    const url = config.endpoints.images;

    expect(typeof connector.get).toBe('function');

    nock(url)
      .get('')
      .reply(200, data);

    const result = await connector.get();

    expect(result.body).toEqual(data);
  });
});
