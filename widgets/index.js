import {registerWidget} from 'sling-core';
import dynamic from 'next/dynamic';

registerWidget(
  'Pagination Widget',
  dynamic(() => import('./PaginationControlled'), {ssr: false}),
  {
    description:
      'Modify props to make pagination style controlled by the Sling Studio.',
    ownership: 'private',
    type: 'widget',
    key: 'PaginationControlled',
    icon: 'settings_ethernet', // Using the provided icon
    props: [], // Add any props if necessary
  },
);

registerWidget(
  'Widget to Display Bread Crumbs',
  dynamic(() => import('./BreadCrumbsDefault'), {ssr: false}),
  {
    description: 'Edit 2 this to change logo for your company and name',
    ownership: 'private',
    type: 'widget',
    key: 'BreadCrumbsDefault',
    icon: 'Widgets',
    props: [],
  },
);

registerWidget(
  'Custom Search Bar Widget',
  dynamic(() => import('./SearchBar'), {ssr: false}),
  {
    description: 'Search Widget.',
    ownership: 'private',
    type: 'widget',
    key: 'SearchBar',
    icon: 'search',
    props: [],
  },
);

// Register the PureListingSearchBar widget
registerWidget(
  'Search Bar Widget',
  dynamic(() => import('./PureListingSearchBar'), {ssr: false}),
  {
    description: 'Pure Search Widget.',
    ownership: 'private',
    type: 'widget',
    key: 'PureListingSearchBar',
    icon: 'search', // Using the provided icon
    props: [], // Add any props if necessary
  },
);

// Register the Notifications widget
registerWidget(
  'Notification Widget',
  dynamic(() => import('./Notifications'), {ssr: false}),
  {
    description: 'Modify props to make notifications dynamic.',
    ownership: 'private',
    type: 'widget',
    key: 'NotificationWidget',
    icon: '', // Add icon path or leave empty
    props: [], // Add any props if necessary
  },
);

registerWidget(
  'Widget to notifications on Header',
  dynamic(() => import('./HeaderMessages'), {ssr: false}),
  {
    description: 'This widget is used to display messages in the header.',
    ownership: 'private',
    type: 'widget',
    key: 'HeaderMessages',
    icon: 'Widgets',
    props: [],
  },
);

registerWidget(
  'AppLogo',
  dynamic(() => import('./AppLogo'), {ssr: false}),
  {
    description: 'Edit 2 this to change logo for your company and name',
    ownership: 'private',
    type: 'widget',
    key: 'AppLogo',
    icon: 'Widgets',
    props: [],
  },
);
