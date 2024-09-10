import React from 'react';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core';
import clsx from 'clsx';
import {registerWidget} from 'sling-core';

const FooterDefault = (props) => {
  const useStyles = makeStyles((theme) => ({
    footer: {
      left: 0,
      bottom: 0,
      width: '100%',
      zIndex: 99,
      margin: '0',
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      '& .footerContainer': {
        padding: '5px 20px',
        [theme.breakpoints.up('md')]: {
          paddingLeft: 32,
          paddingRight: 32,
        },
        [theme.breakpoints.up('xl')]: {
          padding: '10px 32px',
        },
      },
    },
    btnRoot: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  }));

  const classes = useStyles(props);

  return (
    <>
      <Box className={clsx(classes.footer, 'footer')}>
        <Box
          className='footerContainer'
          alignItems='center'
          flexDirection='row'
          justifyContent='center'
          display='flex'>
          <Box>
            © {new Date().getFullYear()} Brewed Passionately in Dubai. All
            Rights Reserved.
          </Box>
          {/*<Box ml='auto'>*/}
          {/*  <Button className={classes.btnRoot} color='primary'>*/}
          {/*    More*/}
          {/*  </Button>*/}
          {/*</Box>*/}
        </Box>
      </Box>
    </>
  );
};

registerWidget(
  'Footer Default', // Name of the component
  FooterDefault, // The React component associated with this component
  {
    key: 'FooterDefault', // Key used for identifying the component
    widgetType: 'component', // This is a component
    type: 'component', // Type is also set to 'component'
    description:
      'Default Footer Component/ Edit this to customize default footer and use it on your pages.', // Description of the component
    ownership: 'public', // This is a public component
    icon: 'perm_device_information', // Icon representing the component
    props: [], // No props defined for this component
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this component
  },
);

export default FooterDefault;
