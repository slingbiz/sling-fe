import React from 'react';
import asyncComponent from '../@sling/utility/asyncComponent';

export default asyncComponent(() =>
  import('../utils/errorPages/Error404/index'),
);
