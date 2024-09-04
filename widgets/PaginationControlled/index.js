import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

//use widget registry to register the widget
import {registerWidget} from 'sling-core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: theme.spacing(5),
    justifyContent: 'center',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationControlled = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  );
};

registerWidget('Pagination Widget', PaginationControlled, {
  description:
    'Modify props to make pagination style controlled by the Sling Studio.',
  ownership: 'public',
  type: 'widget',
  key: 'PaginationControlled',
  icon: 'settings_ethernet', // Using the provided icon
  props: [], // Add any props if necessary
});

export default PaginationControlled;
