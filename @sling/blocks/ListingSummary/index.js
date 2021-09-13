import React from 'react';
import {Box, Hidden} from '@material-ui/core';
import {Fonts} from '../../../shared/constants/AppEnums';
import {useSelector} from 'react-redux';

const dot = require('dot-object');
const _ = require('lodash');
const ListingSummary = ({widgetProps}) => {
  let {h1, h2} = widgetProps;
  const {fakeProducts} = useSelector(({ssrApi}) => ssrApi);
  const {value: rPath, default: defaultVal} = _.find(widgetProps, {
    type: 'response-derived',
  });

  const totalCount =
    (rPath ? dot.pick(rPath, fakeProducts) : defaultVal) || defaultVal;
  h2 = h2.value.replace(/<totalCount>/g, totalCount);

  return (
    <Hidden only='xs' implementation='css'>
      <Box p={4}>
        <Box fontWeight={Fonts.BOLD} mr={3}>
          {h1.value}
        </Box>
        <Box component='span'>{h2}</Box>
      </Box>
    </Hidden>
  );
};
export default ListingSummary;
