import React from 'react';
import asyncComponent from '../@sling/utility/asyncComponent';

const GlobalPage = asyncComponent(() => import('../modules/global/index'));

export default GlobalPage;
