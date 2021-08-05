import React from 'react';
import ProductListing from './ProductListing';
import {useIntl} from 'react-intl';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AppsContainer from '../../../@sling/wrappers/AppsContainer';
import ProductsSidebar from '../../../@sling/blocks/ProductFilters';

const Products = (props) => {
  console.log(props, '[modules/Products/index.js] props@ [Product/index.js]');
  const {messages} = useIntl();
  return <ProductListing />;
};

export default Products;
