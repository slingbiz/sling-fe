import React from 'react';
import {Box} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ProductSpecification from './ProductSpecification';
import ProductInfo from './ProductInfo';
import DeliveryInfo from './DeliveryInfo';
import Reviews from './Reviews';
import AvailableOffers from './AvailableOffers';
import {registerWidget} from 'sling-core';

const ProductView = ({product}) => {
  if (!product) {
    return <></>;
  }
  return (
    <Grid item sm={12} md={8}>
      <Box component='h3' color='text.primary' fontSize={20} mb={1}>
        ${product.mrp}
        <Box
          component='span'
          color='text.secondary'
          fontSize={16}
          ml={3}
          style={{textDecoration: 'line-through'}}>
          ${+product.mrp - +product.discount}
        </Box>
      </Box>
      <Box color='primary.main' fontSize={16} mb={4}>
        In stoke
      </Box>
      <Box component='p' color='text.secondary'>
        It is a long established fact that a reader will be distracted by the
        readable content of a page looking at its layout. The point of using
        Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use..
      </Box>
      <Divider style={{marginTop: 15, marginBottom: 15}} />
      <AvailableOffers />
      <DeliveryInfo />
      <Divider style={{marginTop: 15, marginBottom: 15}} />
      <ProductSpecification />
      <Divider style={{marginTop: 15, marginBottom: 15}} />
      <ProductInfo />
      <Divider style={{marginTop: 15, marginBottom: 15}} />
      <Reviews />
    </Grid>
  );
};

registerWidget(
  'Product View', // Name of the block
  ProductView, // The React component associated with the block from the Blocks object
  {
    key: 'ProductView', // Key used for identifying the block
    type: 'block', 
    description: 'PDP - Detail level information for a product.', // Description of the block
    ownership: 'private', // This is a private block
    icon: 'shopping_basket', // Icon representing the block
    props: [], // No props defined for this block
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this block
  },
);

export default ProductView;
