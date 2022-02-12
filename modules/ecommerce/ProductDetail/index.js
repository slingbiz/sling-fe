import React, {useEffect} from 'react';
import ProductImageSlide from './ProductImageSlide';
import {useDispatch, useSelector} from 'react-redux';
import AppCard from '../../../@sling/core/AppCard';
import Header from './Header';
import HeaderCommon from '../../../@sling/components/HeaderDefault';
import ProductView from './ProductView/index';
import GridContainer from '../../../@sling/core/GridContainer';
import SimilarProduct from './SimilarProduct';
import {getProductDetail} from '../../../redux/actions/Ecommerce';
import {InfoView} from '../../../@sling';
import AppAnimate from '../../../@sling/core/AppAnimate';
import {useRouter} from 'next/router';
import {Box, Card} from '@material-ui/core';

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  const {currentProduct} = useSelector(({ecommerce}) => ecommerce);
  const router = useRouter();
  const {id} = router.query;
  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <HeaderCommon style={{position: 'sticky'}} />
      {currentProduct ? (
        <Card style={{padding: 20}}>
          <Header product={currentProduct} />
          <GridContainer>
            <ProductImageSlide product={currentProduct} />
            <ProductView product={currentProduct} />
          </GridContainer>
          <SimilarProduct />
        </Card>
      ) : null}
      <InfoView />
    </Box>
  );
};

export default ProductDetail;
