const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const src = fs.readFileSync(path.join(__dirname, '_app.js'), 'utf8');

test('ThemeProvider uses API initConfig (merged), not only local defaultConfig', () => {
  assert.match(src, /mergeInitConfig/);
  assert.doesNotMatch(src, /<SlingThemeProvider[^>]*theme=\{defaultConfig\}/);
});
