const withThemeCssVars = (theme = {}) => {
  const palette = theme.palette || {};
  const existingBaseline = theme.overrides?.MuiCssBaseline || {};
  const existingGlobal = existingBaseline['@global'] || {};
  return {
    ...theme,
    overrides: {
      ...theme.overrides,
      MuiCssBaseline: {
        ...existingBaseline,
        '@global': {
          ...existingGlobal,
          ':root': {
            ...(existingGlobal[':root'] || {}),
            '--sling-primary': palette.primary?.main,
            '--sling-primary-contrast': palette.primary?.contrastText,
            '--sling-secondary': palette.secondary?.main,
            '--sling-bg': palette.background?.default,
            '--sling-paper': palette.background?.paper,
            '--sling-text': palette.text?.primary,
            '--sling-text-secondary': palette.text?.secondary,
            '--sling-divider': theme.divider,
            '--sling-font': theme.typography?.fontFamily,
          },
        },
      },
    },
  };
};

module.exports = {withThemeCssVars};
