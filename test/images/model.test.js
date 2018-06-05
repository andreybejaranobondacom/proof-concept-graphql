'use strict';

const { mockClass } = require('../utils');

const stubs = require('../stubs/newmodule');

mockClass('../src/modules/images/Connector', { name: 'get', stubs: { body: stubs.get() } });

const Model = require('../../src/modules/images/Model');

describe('images Model', () => {
  const model = new Model();
  it('should get', async () => {
    const data = stubs.get();

    expect(typeof model.get).toBe('function');

    const result = await model.get();

    expect(result).toEqual(data.data);
  });
});
