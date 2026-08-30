const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const read = (rel) => fs.readFileSync(path.join(__dirname, rel), 'utf8');

test('catalog widgets are registered for the demo shop', () => {
  const blocks = read('index.js');
  assert.match(blocks, /key:\s*'ProductFilters'/);
  assert.match(blocks, /key:\s*'ProductList'/);
  assert.match(blocks, /key:\s*'ProductView'/);
  assert.match(blocks, /key:\s*'ListingSearchBar'/);
  assert.match(blocks, /import\('\.\/ProductFilters'\)/);
  assert.match(blocks, /import\('\.\/ProductList'\)/);

  const widgets = read('../widgets/index.js');
  assert.match(widgets, /key:\s*'PureListingSearchBar'/);

  const components = read('../components/index.js');
  assert.match(components, /key:\s*'ProductDetailPageComponent'/);
});

test('catalog widget files exist', () => {
  const files = [
    'ProductFilters/index.js',
    'ProductList/index.js',
    'ProductList/GridItem.js',
    'ListingSearchBar/index.js',
    'ProductView/index.js',
    '../widgets/PureListingSearchBar/index.js',
    '../utils/services/db/ecommerce/ecommerceData.js',
  ];
  files.forEach((rel) => {
    assert.equal(fs.existsSync(path.join(__dirname, rel)), true, rel);
  });
});

test('home after login is the company root, not Dubai', () => {
  const src = read('../utils/constants/AppConst.js');
  assert.match(src, /export const initialUrl = '\/'/);
  assert.doesNotMatch(src, /dubai/);
});
