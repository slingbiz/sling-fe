import React, {useContext} from 'react';
import {Box, fade} from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GridItemStatic from '../ProductList/GridItemStatic';
import ecommerce from '../../utils/services/db/ecommerce/ecommerceData';
import {AppContext, registerWidget} from 'sling-core';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SimilarProduct = () => {
  const {theme} = useContext(AppContext);
  return (
    <Box
      p={5}
      marginTop={10}
      bgcolor={fade(theme.palette.background.default, 0.6)}>
      <Box fontSize={18} mt={2}>
        <b> Customer Also Viewed </b>
      </Box>
      <Slider {...settings}>
        {ecommerce.map((item, index) => (
          <Box p={5} key={index}>
            <GridItemStatic key={index} item={item} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

registerWidget(
  'Similar Product List', // Name of the block
  SimilarProduct, // The React component associated with the block from the Blocks object
  {
    key: 'SimilarProductList', // Key used for identifying the block
    widgetType: 'block', // This is a block
    type: 'block', // Keeping both widgetType and type as requested
    description: 'Shows Similar Product List, Used on the PDP page.', // Description of the block
    ownership: 'private', // This is a private block
    icon: '', // No icon provided
    props: [], // No props defined for this block
    availableToAllPages: true, // If applicable
    config: {}, // Add config if needed
    requiredProps: [], // No required props for this block
  },
);

export default SimilarProduct;
