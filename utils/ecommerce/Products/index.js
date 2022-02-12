import React from 'react';
import ProductListing from './ProductListing';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Products = (props) => {
  console.log(props, '[utils/Products/index.js] props@ [Product/index.js]');
  return <ProductListing />;
};

export default Products;
