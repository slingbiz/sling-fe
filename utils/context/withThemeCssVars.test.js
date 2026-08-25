const {test} = require('node:test');
const assert = require('node:assert/strict');
const {withThemeCssVars} = require('./withThemeCssVars');

test('exposes tenant palette as CSS variables for storefront widgets', () => {
  const themed = withThemeCssVars({
    divider: '#eee',
    palette: {
      primary: {main: '#ff9800', contrastText: '#fff'},
      secondary: {main: '#163a5f'},
      background: {default: '#fff8f0', paper: '#fff'},
      text: {primary: '#222', secondary: '#666'},
    },
    typography: {fontFamily: 'Open Sans, sans-serif'},
  });

  const vars = themed.overrides.MuiCssBaseline['@global'][':root'];
  assert.equal(vars['--sling-primary'], '#ff9800');
  assert.equal(vars['--sling-primary-contrast'], '#fff');
  assert.equal(vars['--sling-secondary'], '#163a5f');
  assert.equal(vars['--sling-bg'], '#fff8f0');
  assert.equal(vars['--sling-paper'], '#fff');
  assert.equal(vars['--sling-text'], '#222');
  assert.equal(vars['--sling-text-secondary'], '#666');
  assert.equal(vars['--sling-font'], 'Open Sans, sans-serif');
});
