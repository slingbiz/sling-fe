import React from 'react';
import {Box, Typography, TextField, IconButton, Avatar, Icon, Grid} from '@material-ui/core';
import {Search} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
    position: 'sticky',
    top: 0,
    zIndex: 1100,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  logoText: {
    fontWeight: 'bold',
    letterSpacing: '-0.5px',
    color: theme.palette.text.primary,
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    paddingLeft: theme.spacing(2),
  },
  searchInput: {
    '& .MuiInput-underline:before': { borderBottom: 'none' },
    '& .MuiInput-underline:after': { borderBottom: 'none' },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: theme.spacing(1),
  }
}));

const PreviewComponent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={4} sm={3} className={classes.logoContainer}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Icon>menu</Icon>
          </IconButton>
          <Icon style={{ color: '#FF0000', fontSize: 32 }}>play_circle_filled</Icon>
          <Typography variant="h6" className={classes.logoText}>ViewTube</Typography>
        </Grid>
        <Grid item xs={5} sm={6}>
          <Box className={classes.searchContainer}>
            <TextField 
              fullWidth 
              placeholder="Search videos..." 
              className={classes.searchInput}
              InputProps={{ disableUnderline: true }}
            />
            <IconButton color="inherit">
              <Icon>search</Icon>
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={3} sm={3} className={classes.actions}>
          <IconButton color="inherit" style={{ display: 'inline-flex' }}>
            <Icon>video_call</Icon>
          </IconButton>
          <IconButton color="inherit" style={{ display: 'inline-flex' }}>
            <Icon>notifications</Icon>
          </IconButton>
          <Avatar style={{ backgroundColor: '#0A8FDC', width: 32, height: 32 }}>U</Avatar>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PreviewComponent;
