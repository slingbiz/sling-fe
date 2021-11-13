import React from 'react';
import AppPage from '../../@sling/hoc/AppPage';
import asyncComponent from '../../@sling/utility/asyncComponent';
import {INIT_CONFIG} from '../../shared/constants/Services';

const Products = asyncComponent(() =>
  import('../../modules/ecommerce/Products'),
);

export async function getServerSideProps(context) {
  let response = {};
  /**
   * To be fetched from backend server api remote call.
   * Make this a list of apis
   * @type {string}
   */
  const API_URL = 'https://fakestoreapi.com/products';

  try {
    response = await fetch(`${API_URL}`);
    response = await response.json();
  } catch (e) {
    console.log(
      '[MyApp.getInitialProps] - Using default theme. Error Message',
      e.message,
    );
  }
  return {
    props: {response}, // will be passed to the page component as props
  };
}
export default Products;
// export default AppPage(() => <Products />);
// export default () => <> asfdasf</>;
