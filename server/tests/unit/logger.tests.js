const logger = require('../../src/middleware/logger');

describe('logger middleware', () => {
  it('logs method and path', () => {
    const req = { method: 'GET', path: '/test' };
    const res = {};
    const next = jest.fn();

    console.log = jest.fn();
    logger(req, res, next);

    expect(console.log).toHaveBeenCalledWith('[GET] /test');
    expect(next).toHaveBeenCalled();
  });
});
