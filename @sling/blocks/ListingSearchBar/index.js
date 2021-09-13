import React, {useCallback} from 'react';
import {Box} from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';
import IconButton from '@material-ui/core/IconButton';
import {useDispatch, useSelector} from 'react-redux';
import AppSearch from '../../core/SearchBar';
import {setViewType} from '../../../redux/actions/Ecommerce';
import {VIEW_TYPE} from '../../../redux/reducers/Ecommerce';
import {setProductFilters} from '../../../redux/actions/SSRActions';
import PureListingSearchBar from '../../modules/widgets/PureListingSearchBar';

const _ = require('lodash');

const ListingSearchBar = ({widgetProps}) => {
  console.log(
    widgetProps,
    'widgetPropswidgetPropswidgetPropswidgetPropswidgetProps',
  );
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
    <Box display='flex' alignItems='center' justifyContent={'flex-end'}>
      <PureListingSearchBar onSearch={searchProduct} />
      {/*<Hidden mdDown>*/}
      <IconButton onClick={() => dispatch(setViewType(VIEW_TYPE.LIST))}>
        <ListIcon color={viewType === VIEW_TYPE.LIST ? 'primary' : 'inherit'} />
      </IconButton>
      <IconButton onClick={() => dispatch(setViewType(VIEW_TYPE.GRID))}>
        <AppsIcon color={viewType === VIEW_TYPE.GRID ? 'primary' : 'inherit'} />
      </IconButton>
      {/*</Hidden>*/}
    </Box>
  );
};

export default ListingSearchBar;
