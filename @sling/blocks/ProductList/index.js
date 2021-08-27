import React from 'react';
import {Box, Card} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {VIEW_TYPE} from '../../../redux/reducers/Ecommerce';
import ProductList from '../../../modules/ecommerce/Products/ProductListing/ProductList';
import {useSelector} from 'react-redux';
import ProductGrid from './ProductGrid';
import Grid from '@material-ui/core/Grid';
import PaginationControlled from '../../../modules/muiComponents/util/Pagination/Controlled';
import ssrApi from '../../../redux/reducers/SSRApi';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > div': {
      width: '100%',
    },
  },
}));
const Products = (props) => {
  const classes = useStyles();
  const {ecommerceList, viewType} = useSelector(({ecommerce}) => ecommerce);
  const {fakeProducts} = useSelector(({ssrApi}) => ssrApi);

  // console.log(ssrApiRes, '[@ProductList/index.js]', ssrApiRes);
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
        <ProductGrid ecommerceList={fakeProducts} loading={loading} />
      ) : (
        <ProductList ecommerceList={fakeProducts} loading={loading} />
      )}
      <PaginationControlled />
    </Box>
  );
};

export default Products;
