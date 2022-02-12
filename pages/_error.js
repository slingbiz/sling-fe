import React from 'react';
import asyncComponent from '../@sling/utility/asyncComponent';

export default asyncComponent(() =>
  import('../components/Error404/index'),
);
