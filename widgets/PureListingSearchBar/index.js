import React from 'react';
import AppSearch from '../SearchBar';

//use widget registry to register the widget
import {registerWidget} from 'sling-core';

const PureListingSearchBar = ({onSearch}) => {
  return (
    <AppSearch
      placeholder='Search'
      onChange={(e) =>
        onSearch
          ? onSearch(e.target.value)
          : console.log(
              'Please add a search function for PureListingSearchBar widget.',
            )
      }
    />
  );
};

// Register the PureListingSearchBar widget
registerWidget('Search Bar Widget', PureListingSearchBar, {
  description: 'Pure Search Widget.',
  ownership: 'public',
  type: 'widget',
  key: 'PureListingSearchBar',
  icon: 'search', // Using the provided icon
  props: [], // Add any props if necessary
});

export default PureListingSearchBar;
