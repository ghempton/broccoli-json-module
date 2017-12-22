'use strict';

const co = require('co');

const helper = require('broccoli-test-helper');
const createBuilder = helper.createBuilder;
const createTempDir = helper.createTempDir;

const JsonModule = require('./index');

describe('JsonModule', () => {
  let input, output;

  beforeEach(co.wrap(function *() {
    input = yield createTempDir();

    let subject = new JsonModule(input.path());
    output = createBuilder(subject);
  }));

  afterEach(co.wrap(function *() {
    yield input.dispose();
    yield output.dispose();
  }));

  it('should build', co.wrap(function *() {
    input.write({
      'a.json': '{"foo": 42}',
      'lib': {
        'b.json': '{"bar": 13}',
        'c.js': 'export default { baz: 37 };',
      }
    });

    yield output.build();

    expect(output.read()).toEqual({
      'a.js': 'export default {"foo": 42};',
      'lib': {
        'b.js': 'export default {"bar": 13};',
        'c.js': 'export default { baz: 37 };',
      }
    });
  }));
});
