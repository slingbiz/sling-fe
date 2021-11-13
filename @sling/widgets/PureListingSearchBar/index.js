import React from 'react';
import AppSearch from '../SearchBar';

const PureListingSearchBar = ({onSearch}) => {
  return (
    <AppSearch
      placeholder='Search'
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};
export default PureListingSearchBar;
