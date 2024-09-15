import React, {useContext} from 'react';
import {onToggleAppDrawer} from '../../redux/actions';
import {useDispatch} from 'react-redux';
import {Box} from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import {AppContext, AppEnums, registerWidget} from 'sling-core';
import {makeStyles} from '@material-ui/core/styles';

const {Fonts} = AppEnums;

const useStyles = makeStyles((theme) => ({
  appsContainer: (props) => ({
    display: 'flex',
  }),
  appsSidebar: {
    [theme.breakpoints.up('lg')]: {
      width: '17rem',
    },
    [theme.breakpoints.up('xl')]: {
      width: '20rem',
    },
  },
  appsMainContent: (props) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${props.fullView ? 0 : 17}rem)`,
      paddingLeft: props.fullView ? 0 : 40,
    },
    [theme.breakpoints.up('xl')]: {
      width: `calc(100% - ${props.fullView ? 0 : 20}rem)`,
    },
  }),
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuIcon: {
    width: 35,
    height: 35,
  },
  appSidebarDrawer: {
    width: '19rem',
    '& .listItem': {
      zIndex: 1305,
    },
  },
  scLauncher: {
    '& .sc-header, & .sc-message--content.sent .sc-message--text, & .sc-header--close-button:hover':
      {
        backgroundColor: `${theme.palette.primary.main} !important`,
      },
  },
}));

const FilterToggle = ({widgetProps}) => {
  const dispatch = useDispatch();
  let {h1} = widgetProps;
  const {footer, navStyle} = useContext(AppContext);
  const classes = useStyles({footer, navStyle});

  return (
    <Box
      mb={{xs: -3, md: 0, lg: 0}}
      mt={{xs: -3, lg: 0}}
      display='flex'
      alignItems='center'>
      <Hidden lgUp>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='open drawer'
          onClick={() => dispatch(onToggleAppDrawer())}>
          <FilterListIcon className={classes.menuIcon} />
        </IconButton>
      </Hidden>
      <Box
        component='h2'
        color='text.primary'
        fontWeight={Fonts.BOLD}
        fontSize={16}>
        {h1.value}
      </Box>
    </Box>
  );
};

registerWidget(
  'Filter Toggle for Mobile devices', // Name of the block
  FilterToggle, // The React component associated with the block from the Blocks object
  {
    key: 'FilterToggle', // Key used for identifying the block
    type: 'block',
    description: 'h1 value to be shown on mobile.', // Description of the block
    ownership: 'private', // This is a private block
    icon: 'account_balance', // Icon representing the block
    props: [
      {
        name: 'h1',
        propType: 'static', // Static prop type
        dataType: 'string', // Data type is string
        default: 'default h1', // Default value for the prop
      },
    ],
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: ['h1'], // Required props for the block
  },
);

export default FilterToggle;
