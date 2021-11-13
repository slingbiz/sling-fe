import React, {useContext} from 'react';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import {ContentView, ThemeSetting} from '../../../index';
import Box from '@material-ui/core/Box';
import useStyles from '../../../components/HeaderDefault/index.style';
import AppFixedFooter from './AppFixedFooter';
import clsx from 'clsx';
import AppContext from '../../../utility/AppContext';
import {LayoutType} from '../../../../shared/constants/AppEnums';
import NotificationBar from '../HorDarkLayout/NotificationBar';

const DrawerLayout = (props) => {
  const {footer, layoutType, footerType} = useContext(AppContext);
  const classes = useStyles({footer});

  return (
    <Box
      className={clsx(
        classes.appMain,
        layoutType === LayoutType.BOXED ? classes.boxedLayout : '',
        {
          appMainFooter: footer && footerType === 'fluid',
          appMainFixedFooter: footer && footerType === 'fixed',
        },
      )}>
      <AppHeader />
      <Box className={classes.mainContent}>
        <Box className={classes.mainContainerFull}>
          <Box className={classes.contentViewWrap}>
            <ContentView>{props.children}</ContentView>
          </Box>
        </Box>
      </Box>
      <AppFixedFooter />
    </Box>
  );
};

export default DrawerLayout;
