import React, {useEffect} from 'react';
import ProductImageSlide from '../../blocks/ProductImageSlide';
import {useDispatch, useSelector} from 'react-redux';
import Header from './Header';
import HeaderCommon from '../HeaderDefault';
import ProductView from '../../blocks/ProductView';
import {GridContainer, InfoView, registerWidget} from 'sling-core';
import SimilarProduct from '../../blocks/SimilarProduct';
import {getProductDetail} from '../../redux/actions/Ecommerce';
import {useRouter} from 'next/router';
import {Box, Card} from '@material-ui/core';

const ProductDetail = () => {
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

registerWidget(
  'Product Detail Page Component', // Name of the component
  ProductDetail, // The React component associated with this component
  {
    key: 'ProductDetailPageComponent', // Key used for identifying the component
    type: 'component', // Type is also set to 'component'
    description: 'Detail page wrapper for Sling FE PDP', // Description of the component
    ownership: 'private', // This is a private component
    icon: 'add_shopping_cart', // Icon representing the component
    props: [], // No props defined for this component
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this component
  },
);

export default ProductDetail;
