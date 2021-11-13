import React from 'react';
import SimpleFunnel from './Components/SimpleFunnel';
// eslint-disable-next-line import/no-webpack-loader-syntax
import SimpleFunnelSource from '!raw-loader!./Components/SimpleFunnel';
import Grid from '@material-ui/core/Grid';

import ComponentCard from '../../../../@sling/core/ComponentCard';
import ComponentHeader from '../../../../@sling/core/ComponentHeader';
import GridContainer from '../../../../@sling/core/GridContainer';

const Treemap = () => {
  return (
    <>
      <ComponentHeader
        title='Funnel Chart'
        refUrl='http://recharts.org/en-US/api/FunnelChart/'
      />

      <GridContainer>
        <Grid item xs={12} lg={12}>
          <ComponentCard
            title='Simple FunnelChart'
            component={SimpleFunnel}
            source={SimpleFunnelSource}
          />
        </Grid>
      </GridContainer>
    </>
  );
};

export default Treemap;
