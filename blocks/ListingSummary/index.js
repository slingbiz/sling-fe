import React from 'react';
import {Box} from '@material-ui/core';
import {AppEnums, registerWidget} from 'sling-core';
const {Fonts} = AppEnums;
import {useSelector} from 'react-redux';

const dot = require('dot-object');
const _ = require('lodash');
const ListingSummary = ({widgetProps}) => {
  let {h1, h2} = widgetProps;
  const {fakeProducts} = useSelector(({ssrApi}) => ssrApi);
  const {value: rPath, default: defaultVal} =
    _.find(widgetProps, {
      type: 'response-derived',
    }) || {};

  const totalCount =
    (rPath ? dot.pick(rPath, fakeProducts) : defaultVal) || defaultVal;
  h2 = h2.value.replace(/<totalCount>/g, totalCount);
  console.log(
    rPath,
    fakeProducts,
    'rPath - fakeProudcts',
    totalCount,
    'h2',
    h2,
  );

  return (
    <Box p={4}>
      <Box component='h1' fontWeight={Fonts.BOLD} fontSize={18} mr={3}>
        {h1.value}
      </Box>
      <Box component='span'>{h2}</Box>
    </Box>
  );
};

registerWidget(
  'Listing Summary Top Bar', // Name of the block
  ListingSummary, // The React component associated with the block from the Blocks object
  {
    key: 'ListingSummaryTopBar', // Key used for identifying the block
    type: 'block',
    description: 'Summary of total count and current page. h1 & h2 values.', // Description of the block
    ownership: 'private', // This is a private block
    icon: 'picture_in_picture_alt', // Icon representing the block
    props: [
      {
        name: 'totalCount',
        propType: 'response-derived', // Derived from API response
        dataType: 'string', // Data type is string
        default: '341', // Default value
      },
      {
        name: 'h1',
        propType: 'static', // Static prop type
        dataType: 'string', // Data type is string
        default: '', // Default value
      },
      {
        name: 'h2',
        propType: 'static-derived', // Derived from static value
        dataType: 'string', // Data type is string
        default: '', // Default value
      },
    ],
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: ['totalCount', 'h1', 'h2'], // Required props for the block
  },
);

export default ListingSummary;
