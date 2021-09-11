import React from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import GridItem from './GridItem';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  cPoint: {cursor: 'pointer'},
}));

const ProductGrid = ({ecommerceList}) => {
  const classes = useStyles();
  const {data, sling_mapping: slingMapping} = ecommerceList;
  console.log(ecommerceList, ' @ecommerceList@ecommerceList');
  return (
    <Grid container spacing={4} justifyContent={'center'}>
      {data?.map((item, k) => {
        return (
          <Grid
            item
            xs={12}
            md={4}
            key={'item-' + k}
            className={clsx(classes.grid, classes.cPoint)}>
            <GridItem item={item} key={item.id} slingMapping={slingMapping} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default ProductGrid;
