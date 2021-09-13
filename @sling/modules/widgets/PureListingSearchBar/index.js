import React from 'react';
import AppSearch from '../../core/SearchBar';

const _ = require('lodash');

const PureListingSearchBar = ({onSearch}) => {
  return (
    <AppSearch
      placeholder='Search'
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};
export default PureListingSearchBar;
