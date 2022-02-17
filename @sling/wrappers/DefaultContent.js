import React from 'react';
import Grid from '@material-ui/core/Grid';

const DefaultContent = (props) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={'center'}
      width={'auto'}
      alignItems='baseline'
      flexDirection='row'>
      {props.children}
    </Grid>
  );
};

export default DefaultContent;

DefaultContent.defaultProps = {isDetailView: false};
