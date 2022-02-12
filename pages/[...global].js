import React from 'react';
import asyncComponent from '../@sling/utility/asyncComponent';

const GlobalPage = asyncComponent(() => import('../@sling/utility/global/index'));

export default GlobalPage;
