import React from 'react';
import {emphasize, makeStyles, withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    padding: 0,
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.log('Breadcrumb Clicked. Act on!');
  // alert('You clicked a breadcrumb.');
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
    margin: -theme.spacing(3),
    marginBottom: theme.spacing(3),
    // background: '#f5f7fe',
  },
  avatar: {
    background: 'none',
    // marginRight: -theme.spacing(1.5),
    padding: 0,
  },
  linkRoot: {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    '&:hover, &:focus': {
      backgroundColor: 'transparent',
      color: theme.palette.text.primary,
    },
  },
}));

export default function CustomizedBreadcrumbs() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Breadcrumbs aria-label='breadcrumb'>
        <StyledBreadcrumb
          component='a'
          className={classes.linkRoot}
          href='#'
          label='Home'
          // avatar={
          //   <Avatar className={classes.avatar}>
          //     <HomeIcon />
          //   </Avatar>
          // }
          onClick={handleClick}
        />
        <StyledBreadcrumb
          component='a'
          className={classes.linkRoot}
          href='#'
          label='Catalog'
          onClick={handleClick}
        />
        <StyledBreadcrumb
          label='Accessories'
          className={classes.linkRoot}
          // deleteIcon={<ExpandMoreIcon />}
          onClick={handleClick}
          // onDelete={handleClick}
        />
      </Breadcrumbs>
    </Paper>
  );
}
