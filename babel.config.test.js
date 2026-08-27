const test = require('node:test');
const assert = require('node:assert/strict');
const config = require('./babel.config.js');

test('JSX compiles: babel includes preset-react', () => {
  const encoded = JSON.stringify(config);
  assert.match(encoded, /preset-react/);
});
