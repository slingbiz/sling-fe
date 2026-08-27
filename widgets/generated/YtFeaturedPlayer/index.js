import React from 'react';
import {Box, Grid, Typography, Button, Avatar, Icon} from '@material-ui/core';
import {Chat, Save, Share} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: { padding: theme.spacing(4) },
    backgroundColor: theme.palette.background.default,
  },
  playerWrapper: {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%',
    backgroundColor: '#000',
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
  },
  playerPlaceholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    backgroundImage: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
  },
  metaContainer: {
    marginTop: theme.spacing(2),
  },
  channelSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  flexAlign: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
  }
}));

const PreviewComponent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Box className={classes.playerWrapper}>
            <Box className={classes.playerPlaceholder}>
              <Icon style={{ fontSize: 64, color: '#fff' }}>play_circle_outline</Icon>
              <Typography variant="h6" style={{ marginTop: 8 }}>Click to Play Featured Stream</Typography>
            </Box>
          </Box>
          <Box className={classes.metaContainer}>
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>
              Building a YouTube Clone with React & Material UI (Full Course)
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{ marginTop: 4 }}>
              1,240,582 views • Oct 24, 2023
            </Typography>
            <Box className={classes.channelSection}>
              <Box className={classes.flexAlign}>
                <Avatar style={{ backgroundColor: '#ff9800' }}>CD</Avatar>
                <Box>
                  <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>CodeCraft Academy</Typography>
                  <Typography variant="caption" color="textSecondary">1.4M subscribers</Typography>
                </Box>
                <Button variant="contained" color="secondary" style={{ marginLeft: 16 }}>
                  Subscribe
                </Button>
              </Box>
              <Box className={classes.flexAlign}>
                <Button startIcon={<Icon>thumb_up</Icon>}>45K</Button>
                <Button startIcon={<Icon>share</Icon>}>Share</Button>
                <Button startIcon={<Icon>playlist_add</Icon>}>Save</Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: 16 }}>Live Chat</Typography>
          <Box style={{ height: 320, backgroundColor: '#fff', borderRadius: 8, padding: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #E0E0E0' }}>
            <Box style={{ overflowY: 'auto', flexGrow: 1 }}>
              <Typography variant="body2" style={{ marginBottom: 8 }}><strong>Alex J:</strong> This is exactly what I needed!</Typography>
              <Typography variant="body2" style={{ marginBottom: 8 }}><strong>Sarah Connor:</strong> Is the source code available on GitHub?</Typography>
              <Typography variant="body2" style={{ marginBottom: 8 }}><strong>DevDave:</strong> Awesome UI design!</Typography>
              <Typography variant="body2" style={{ marginBottom: 8 }}><strong>CodeCraft Academy:</strong> Yes, check the description links!</Typography>
            </Box>
            <Box style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              <Avatar style={{ width: 24, height: 24 }}>U</Avatar>
              <Typography variant="body2" color="textSecondary">Chat publicly as User...</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PreviewComponent;
