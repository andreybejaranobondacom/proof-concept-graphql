function mockClass(urlClass, method) {
  jest.mock(urlClass);
  const Connector = require(urlClass);
  Connector.mockImplementation(() => {
    return {
      [method.name]: () => (method.stubs)
    };
  });
}

module.exports = {mockClass};
