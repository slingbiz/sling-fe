import React from 'react';
import asyncComponent from '../@sling/utility/asyncComponent';

const GlobalPage = asyncComponent(() => import('../modules/global/index'));

export async function getInitialProps(context) {
  let response = {};
  const API_URL = 'https://fakestoreapi.com/products';

  try {
    response = await fetch(`${API_URL}`);
    response = await response.json();
  } catch (e) {
    console.log('[GlobalPage] - Using default theme. Error Message', e.message);
  }
  return {
    props: {response}, // will be passed to the page component as props
  };
}
export default GlobalPage;
