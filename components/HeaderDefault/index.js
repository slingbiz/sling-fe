import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import useStyles from './Header.style';
import HeaderMessages from '../../widgets/HeaderMessages';
import Notifications from '../../widgets/Notifications';
import AppLogo from '../../widgets/AppLogo';
import Hidden from '@material-ui/core/Hidden';
import LanguageSwitcher from '../../utils/context/LanguageSwitcher';

const Header = () => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem className={classes.menuItemRoot}>
        <HeaderMessages />
      </MenuItem>
      <MenuItem className={classes.menuItemRoot}>
        <Notifications />
      </MenuItem>
      <MenuItem className={classes.menuItemRoot}>
        {/* Ensure proper color props for Button */}
        <LanguageSwitcher />
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar className='app-bar' color='inherit'>
        <Toolbar className={classes.appToolbar}>
          <AppLogo />
          <Box className={classes.grow} />
          <Box className={classes.sectionDesktop}>
            <HeaderMessages />
            <Notifications />
          </Box>
          <Box className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'>
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <Hidden mdDown>
          <Box className={classes.headerNav}>
            <Box className={classes.headerContainer}>
              {/* Add your navigation here */}
            </Box>
          </Box>
        </Hidden>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default Header;
