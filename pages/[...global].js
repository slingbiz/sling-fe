import React from 'react';
import asyncComponent from '../@sling/utility/asyncComponent';

const GlobalPage = asyncComponent(() => import('../utils/global/index'));

export default GlobalPage;
