import React from 'react';
import {grey} from '@material-ui/core/colors';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  appHeader: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${grey[300]}`,
    justifyContent: 'space-between',
  },
  checkboxRoot: {
    marginRight: 8,
  },
  pointer: {
    cursor: 'pointer',
  },
}));

const AppsHeader = ({children}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      justifyContent={'center'}
      width={'100%'}
      alignItems='baseline'
      flexDirection='row'
      px={6}
      className={classes.appHeader}>
      {children}
    </Grid>
  );
};

export default AppsHeader;
AppsHeader.defaultProps = {};
