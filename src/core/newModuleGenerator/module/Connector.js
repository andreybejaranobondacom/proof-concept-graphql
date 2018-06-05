'use strict';

/**
 *@name
 * Class for connector brings data by service rest or Data base
 * Includes dependencies and creates methods for funcionality
 */
class Connector {
  /**
   * this is method method example, replace logic for new module
  */
  async get() {
    const dataExample = {
      data: [
        {
          id: 1,
          name: 'test name',
          age: 28
        }
      ]
    };
    return Promise.resolve(dataExample);
  }
}

module.exports = Connector;
