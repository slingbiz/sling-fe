const test = require('node:test');
const assert = require('node:assert/strict');
const config = require('./babel.config.js');

test('JSX compiles with next/babel so Vercel keeps Next transforms', () => {
  const encoded = JSON.stringify(config);
  assert.match(encoded, /next\/babel/);
  assert.match(encoded, /preset-react/);
});
