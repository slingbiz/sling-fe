const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const read = (rel) => fs.readFileSync(path.join(__dirname, rel), 'utf8');

test('blocks registry has no product listing widgets', () => {
  const src = read('index.js');
  assert.doesNotMatch(src, /ProductFilters|ProductList|ProductView|ListingSearchBar/);
  assert.match(src, /DefaultHeaderUser/);
  assert.match(src, /UserInfo/);
});

test('home after login is the company root', () => {
  const src = read('../utils/constants/AppConst.js');
  assert.match(src, /export const initialUrl = '\/'/);
  assert.doesNotMatch(src, /dubai/);
});
