const {layoutHasPaint} = require('./layoutHasPaint');
const test = require('node:test');
const assert = require('node:assert/strict');

test('empty home header is not a painted page', () => {
  assert.equal(
    layoutHasPaint({root: {header: {rows: []}}}),
    false,
  );
});

test('a body row is a painted page', () => {
  assert.equal(
    layoutHasPaint({
      root: {body: {rows: [{cells: [{key: 'DefaultSlingHomePage'}]}]}},
    }),
    true,
  );
});
