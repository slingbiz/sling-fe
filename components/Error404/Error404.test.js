const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const read = (rel) => fs.readFileSync(path.join(__dirname, rel), 'utf8');

test('storefront 404 is Sling, not Crema', () => {
  const src = read('../SlingMissingPage/index.js');
  assert.match(src, /#ff9800/);
  assert.match(src, /#fff8f0/);
  assert.match(src, /#163a5f/);
  assert.match(src, /Open Sans/);
  assert.match(src, /sling\.biz/);
  assert.match(src, /Go home/);
  assert.match(src, /initialUrl/);
  assert.doesNotMatch(src, /errorPageImages\/404/);
  assert.doesNotMatch(src, /dubai/);
  assert.doesNotMatch(src, /color=['"]primary['"]/);
});

test('Error404 and ErrorSling use the Sling missing page', () => {
  assert.match(read('index.js'), /SlingMissingPage/);
  assert.match(read('../ErrorSling/index.js'), /SlingMissingPage/);
  assert.doesNotMatch(read('../ErrorSling/index.js'), /router\.push\('\/home'\)/);
  assert.doesNotMatch(read('../ErrorSling/index.js'), /dubai/);
});

test('pages/404 uses the branded storefront 404', () => {
  const src = read('../../pages/404.js');
  assert.match(src, /components\/Error404/);
  assert.doesNotMatch(src, /errorPageImages\/404/);
});
