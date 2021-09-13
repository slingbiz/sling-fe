import React, {useEffect} from 'react';
import RenderTree from '../../@sling/hoc/RenderTree';
import {useDispatch, useSelector} from 'react-redux';
import {onGetEcommerceData} from '../../redux/actions/Ecommerce';
import CustomizedBreadcrumbs from '../muiComponents/navigation/BreadCrumbs/CustomizedBreadcrumbs';
import Box from '@material-ui/core/Box';
import AppHeader from '../../@sling/core/AppLayout/DrawerLayout/AppHeader';
import {makeStyles} from '@material-ui/core/styles';
import AppFixedFooter from '../../@sling/core/AppLayout/DrawerLayout/AppFixedFooter';
import Error from 'next/error';

const useStyles = makeStyles((theme) => ({
  bodyMain: {padding: '20px 20px 0'},
  appMain: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    paddingTop: 56,
    backgroundColor: 'white',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 70,
    },
    '&.appMainFooter': {
      '& $mainContainerFull': {},
    },
    '&.appMainFixedFooter': {
      paddingBottom: 48,
      [theme.breakpoints.up('xl')]: {
        paddingBottom: 58,
      },
      '& $mainContainerFull': {},
    },
  },
}));

const GlobalPage = () => {
  const classes = useStyles();

  const {layoutConfig, pageTemplate} = useSelector(({layout}) => layout);
  const layout = layoutConfig[pageTemplate];

  if (!layout) {
    return <Error statusCode={'404'} />;
  }
  return (
    <Box className={classes.appMain}>
      <AppHeader />
      <Box className={classes.bodyMain}>
        <CustomizedBreadcrumbs />
        <RenderTree layout={layout} />
        <AppFixedFooter />
      </Box>
    </Box>
  );
};

export default GlobalPage;
