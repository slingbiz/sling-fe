import React from 'react';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import PropTypes from 'prop-types';
import MomentUtils from '@date-io/moment';
import {withThemeCssVars} from './withThemeCssVars';

const SlingThemeProvider = ({children, appLocale, theme: customTheme}) => {
  const mergedTheme = responsiveFontSizes(
    createTheme(withThemeCssVars(customTheme.theme)),
  );

  return (
    <ThemeProvider theme={mergedTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        {children}
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

SlingThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  appLocale: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default SlingThemeProvider;
