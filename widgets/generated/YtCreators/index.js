import React from 'react';
import {Box, Typography, Grid, Avatar, Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up('md')]: { padding: theme.spacing(6, 4) },
    backgroundColor: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  creatorCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  largeAvatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginBottom: theme.spacing(1.5),
    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
  }
}));

const PreviewComponent = () => {
  const classes = useStyles();
  const creators = [
    { name: "TechCraft", subs: "2.4M subscribers", avatar: "TC", color: "#0A8FDC" },
    { name: "DesignDaily", subs: "890K subscribers", avatar: "DD", color: "#ff9800" },
    { name: "CodeWithMe", subs: "1.1M subscribers", avatar: "CW", color: "#313541" },
    { name: "PixelPerfect", subs: "450K subscribers", avatar: "PP", color: "#E0E0E0" }
  ];

  return (
    <Box className={classes.root}>
      <Typography variant="h6" align="center" style={{ fontWeight: 'bold', marginBottom: 8 }}>
        Trending Creators to Follow
      </Typography>
      <Typography variant="body2" align="center" color="textSecondary" style={{ marginBottom: 32 }}>
        Stay updated with the absolute best content creators in the industry
      </Typography>
      <Grid container spacing={2}>
        {creators.map((creator, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Box className={classes.creatorCard}>
              <Avatar className={classes.largeAvatar} style={{ backgroundColor: creator.color }}>
                {creator.avatar}
              </Avatar>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>{creator.name}</Typography>
              <Typography variant="caption" color="textSecondary" style={{ marginBottom: 12 }}>
                {creator.subs}
              </Typography>
              <Button variant="outlined" color="primary" size="small">
                Subscribe
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PreviewComponent;
