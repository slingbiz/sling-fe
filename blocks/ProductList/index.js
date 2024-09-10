import React, {useContext, useEffect} from 'react';
import {Box} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {useDispatch, useSelector} from 'react-redux';
import ProductGrid from './ProductGrid';
import ProductList from './ProductList';
import PaginationControlled from '../../widgets/PaginationControlled/index';
import {AppContext} from 'sling-core';
import {VIEW_TYPE} from '../../utils/constants/AppConst';
import {registerWidget} from 'sling-core';

const dot = require('dot-object');

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    '& > div': {
      width: '100%',
    },
  },
}));

const Products = ({widgetProps}) => {
  const classes = useStyles();

  const {viewType} = useSelector(({ecommerce}) => ecommerce);
  const {isRTL, ssrApi} = useContext(AppContext);
  const {fakeProducts = {}, filterData} = ssrApi;

  const {responsePath} = widgetProps || {};
  let products = fakeProducts;
  if (responsePath?.value) {
    products = dot.pick(responsePath.value, fakeProducts);
  }

  const {sling_mapping: slingMapping = {}} = fakeProducts;
  const {loading} = useSelector(({common}) => common);
  return (
    <Box
      className={classes.root}
      flex={1}
      display='flex'
      p={2}
      height={1}
      alignItems={'center'}
      flexDirection={'column'}
      justifyContent={'center'}>
      {viewType === VIEW_TYPE.GRID ? (
        <ProductGrid
          products={products}
          loading={loading}
          slingMapping={slingMapping}
        />
      ) : (
        <ProductList
          products={products}
          loading={loading}
          slingMapping={slingMapping}
        />
      )}
      <PaginationControlled />
    </Box>
  );
};

registerWidget(
  'Shows Product List', // Name of the block
  Products, // The React component associated with the block from the Blocks object
  {
    key: 'ProductList', // Key used for identifying the block
    widgetType: 'block', // This is a block
    description: 'Takes product array path from the Api response.', // Description of the block
    ownership: 'public', // This is a public block
    type: 'block', // Type is block
    icon: 'account_balance_wallet', // Icon representing the block
    props: [
      {
        name: 'responsePath',
        propType: 'response-derived', // Derived from API response
        dataType: 'string', // Data type is string
        default: 'data', // Default value for the prop
      },
    ],
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: ['responsePath'], // Required props for the block
  },
);

export default Products;
