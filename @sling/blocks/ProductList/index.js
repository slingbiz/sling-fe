import React from 'react';
import {Box} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {VIEW_TYPE} from '../../../redux/reducers/Ecommerce';
import {useSelector} from 'react-redux';
import ProductGrid from './ProductGrid';
import ProductList from './ProductList';
import PaginationControlled from '../../../modules/muiComponents/util/Pagination/Controlled';

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
  const {viewType} = useSelector(({ecommerce}) => ecommerce);
  const {fakeProducts} = useSelector(({ssrApi}) => ssrApi);
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
