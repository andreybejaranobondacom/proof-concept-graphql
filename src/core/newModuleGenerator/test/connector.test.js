'use strict';

const Connector = require('../../src/modules/<%nameModule%>/Connector');

const stubs = require('../stubs/newmodule');

describe('<%nameModule%> Service', () => {
  const connector = new Connector();
  it('should get', async () => {
    const data = stubs.get();

    expect(typeof connector.get).toBe('function');

    const result = await connector.get();

    expect(result).toEqual(data);
  });
});
