import React from 'react';
import Grid from '@material-ui/core/Grid';

// export const useAppsContentStyles = makeStyles((theme) => ({}));

const DefaultContent = (props) => {
  // const classes = useAppsContentStyles(props);
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
