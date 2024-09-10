import React from 'react';
import Button from '@material-ui/core/Button';
import {useRouter} from 'next/router';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {grey} from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/core';
import {AppEnums, IntlMessages, registerWidget} from 'sling-core';
const {Fonts} = AppEnums;
import {initialUrl} from '../../utils/constants/AppConst';

const useStyles = makeStyles(() => {
  return {
    button: {
      fontWeight: Fonts.BOLD,
      fontSize: 16,
      textTransform: 'capitalize',
    },
    image: {
      width: '100%',
    },
  };
});
const Error404 = () => {
  const router = useRouter();

  const onGoBackToHome = () => {
    router.push(initialUrl);
  };

  const classes = useStyles();

  return (
    <Box>
      <Box
        py={{xl: 8}}
        flex={1}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        textAlign='center'>
        <Box
          mb={{xs: 4, xl: 8}}
          width='100%'
          maxWidth={{xs: 200, sm: 300, xl: 706}}>
          <img
            className={classes.image}
            src={'/images/errorPageImages/404.png'}
            alt='404'
          />
        </Box>
        <Box mb={{xs: 4, xl: 5}}>
          <Box
            variant='h3'
            mb={{xs: 3, xl: 10}}
            fontSize={{xs: 20, md: 24}}
            fontWeight={Fonts.BOLD}>
            <IntlMessages id='error.404Error' />.
          </Box>
          <Box
            mb={{xs: 4, xl: 10}}
            color={grey[600]}
            fontSize={16}
            fontWeight={Fonts.MEDIUM}>
            <Typography>
              <IntlMessages id='error.message1' />
            </Typography>
            <Typography>
              <IntlMessages id='error.message2' />
            </Typography>
          </Box>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={onGoBackToHome}>
            <IntlMessages id='error.goBackToHome' />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

registerWidget(
  'Error 404 component', // Name of the component
  Error404, // The React component associated with this component
  {
    key: 'Error404component', // Key used for identifying the component
    widgetType: 'component', // This is a component
    type: 'component', // Type is also set to 'component'
    description: 'Use this to show 404 Error section on your new web page.', // Description of the component
    ownership: 'public', // This is a public component
    icon: 'pan_tool', // Icon representing the component
    props: [], // No props defined for this component
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this component
  },
);

export default Error404;
