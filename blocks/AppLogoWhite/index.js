import React from 'react';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import {registerWidget} from 'sling-core';

const AppLogoWhite = () => {
  const useStyles = makeStyles(() => ({
    logoRoot: {
      display: 'flex',
      flexDirection: 'row',
      cursor: 'pointer',
      alignItems: 'center',
    },
    logo: {
      height: 36,
      marginRight: 10,
    },
  }));
  const classes = useStyles();
  return (
    <Box className={classes.logoRoot}>
      <Hidden smUp>
        <img
          className={classes.logo}
          src={`/images/logo-white.png`}
          alt='sling-logo'
        />
      </Hidden>
      <Hidden xsDown>
        <img
          className={classes.logo}
          src={`/images/logo-white-with-name.png`}
          alt='sling-logo'
        />
      </Hidden>
      <Box
        color='white'
        fontSize={16}
        fontWeight={500}
        mt={4}
        mb={3}
        onClick={() => {}}>
        Demo
      </Box>
    </Box>
  );
};

registerWidget(
  'White Logo', // Name of the block
  AppLogoWhite, // The React component associated with the block from the Blocks object
  {
    key: 'WhiteLogo', // Key used for identifying the block
    type: 'block', 
    description:
      'Wrapper component which displays White version of the logo & name', // Description of the block
    ownership: 'private', // This is a private block
    icon: 'rounded_corner', // Icon representing the block
    props: [], // No props defined for this block
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this block
  },
);

export default AppLogoWhite;
