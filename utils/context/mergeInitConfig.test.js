const {test} = require('node:test');
const assert = require('node:assert/strict');
const {mergeInitConfig} = require('./mergeInitConfig');

const defaultConfig = {
  theme: {
    palette: {
      primary: {main: '#0A8FDC', contrastText: '#fff'},
      secondary: {main: '#F04F47'},
      sidebar: {bgColor: '#313541'},
    },
    typography: {fontFamily: 'Open Sans,sans-serif'},
  },
};

test('API theme.palette.primary.main wins over local defaultConfig', () => {
  const fromApi = {
    theme: {
      palette: {
        primary: {main: '#ABCDEF'},
      },
    },
  };

  const merged = mergeInitConfig(fromApi, defaultConfig);

  assert.equal(merged.theme.palette.primary.main, '#ABCDEF');
  assert.notEqual(merged.theme.palette.primary.main, defaultConfig.theme.palette.primary.main);
  assert.equal(merged.theme.palette.secondary.main, defaultConfig.theme.palette.secondary.main);
  assert.equal(merged.theme.palette.sidebar.bgColor, defaultConfig.theme.palette.sidebar.bgColor);
});

test('missing API keys do not break the default theme', () => {
  const merged = mergeInitConfig({}, defaultConfig);
  assert.equal(merged.theme.palette.primary.main, defaultConfig.theme.palette.primary.main);
  assert.equal(merged.theme.typography.fontFamily, defaultConfig.theme.typography.fontFamily);
});
