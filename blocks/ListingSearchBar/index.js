import React, {useCallback} from 'react';
import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';
import IconButton from '@material-ui/core/IconButton';
import {useDispatch, useSelector} from 'react-redux';
import {setViewType} from '../../redux/actions/Ecommerce';
import {setProductFilters} from '../../redux/actions/SSRActions';
import PureListingSearchBar from '../../widgets/PureListingSearchBar';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {VIEW_TYPE} from '../../utils/constants/AppConst';

//use widget registry to register the widget
import {registerWidget} from 'sling-core';

const _ = require('lodash');
const useStyles = makeStyles((theme) => ({
  viewType: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const ListingSearchBar = ({widgetProps}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let {
    viewType: {value: viewType},
  } = widgetProps;

  const {filterData} = useSelector(({ssrApi}) => ssrApi);

  const debounceFunc = useCallback(
    _.debounce(
      (query) => dispatch(setProductFilters({...filterData, query})),
      500,
    ),
    [],
  );

  /**
   * TODO: Make it search only on Enter press or search icon click.
   * */
  const searchProduct = (query) => {
    debounceFunc(query);
  };

  return (
    <Grid
      container
      width={'100%'}
      display='flex'
      spacing={5}
      alignItems='center'
      justifyContent={'space-between'}>
      <Grid item xs={9} lg={9}>
        <PureListingSearchBar onSearch={searchProduct} />
      </Grid>
      <Grid item xs={3} lg={3} className={classes.viewType}>
        <IconButton onClick={() => dispatch(setViewType(VIEW_TYPE.LIST))}>
          <ListIcon
            color={viewType === VIEW_TYPE.LIST ? 'primary' : 'inherit'}
          />
        </IconButton>
        <IconButton onClick={() => dispatch(setViewType(VIEW_TYPE.GRID))}>
          <AppsIcon
            color={viewType === VIEW_TYPE.GRID ? 'primary' : 'inherit'}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};

registerWidget(
  'Listing Search Bar', // Name of the block
  ListingSearchBar, // The React component associated with the block
  {
    key: 'ListingSearchBar', // Key used for identifying the block
    widgetType: 'block', // This is a block
    description: 'Search Bar Wrapper - accepts List or Grid option',
    ownership: 'public', // This is a public block
    type: 'block', // Type is block
    icon: 'settings_cell', // Icon representing the block
    props: [
      {
        name: 'viewType',
        propType: 'static', // Static prop type
        dataType: 'option', // Option type for the data
        options: [
          {value: 1, label: 'List'},
          {value: 2, label: 'Grid'},
        ],
        default: 2, // Default is 'Grid'
      },
    ],
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: ['viewType'], // Required props for the block
  },
);

export default ListingSearchBar;
