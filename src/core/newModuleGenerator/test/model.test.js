'use strict';

const { mockClass } = require('../utils');

const stubs = require('../stubs/newmodule');

mockClass('../src/modules/<%nameModule%>/Connector', { name: 'get', stubs: { data: stubs.get() } });

const Model = require('../../src/modules/<%nameModule%>/Model');

describe('<%nameModule%> Model', () => {
  const model = new Model();
  it('should get', async () => {
    const data = stubs.get();

    expect(typeof model.get).toBe('function');

    const result = await model.get();

    expect(result.data).toEqual(data.data);
  });
});
