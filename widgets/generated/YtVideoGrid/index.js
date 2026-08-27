import React from 'react';
import {Box, Grid, Typography, Card, CardMedia, CardContent, Avatar, Icon} from '@material-ui/core';
import {Code} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: { padding: theme.spacing(4) },
    backgroundColor: theme.palette.background.default,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  mediaPlaceholder: {
    width: '100%',
    paddingTop: '56.25%',
    backgroundColor: '#313541',
    borderRadius: theme.shape.borderRadius,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  duration: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: '#fff',
    padding: '2px 4px',
    borderRadius: 2,
    fontSize: '0.75rem',
  },
  content: {
    padding: theme.spacing(1.5, 0),
    display: 'flex',
    gap: theme.spacing(1.5),
  },
  textContainer: {
    flexGrow: 1,
  },
  title: {
    fontWeight: 'bold',
    lineHeight: '1.2rem',
    maxHeight: '2.4rem',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  }
}));

const PreviewComponent = () => {
  const classes = useStyles();
  const videos = [
    { title: "Learn TypeScript in 50 Minutes", channel: "TechBytes", views: "320K views", time: "2 days ago", duration: "50:12", color: "#0A8FDC", avatar: "TB" },
    { title: "Minimalist Workspace Setup Tour 2024", channel: "DesignSpace", views: "1.2M views", time: "1 month ago", duration: "12:45", color: "#ff9800", avatar: "DS" },
    { title: "How I Code 10x Faster Using AI Tools", channel: "DevSpeed", views: "85K views", time: "5 hours ago", duration: "18:02", color: "#313541", avatar: "DS" },
    { title: "Lo-Fi Beats to Study/Relax To", channel: "ChillVibe", views: "4.5M views", time: "6 months ago", duration: "3:00:00", color: "#E0E0E0", avatar: "CV" },
    { title: "Is This the Ultimate Gaming Keyboard?", channel: "GearCheck", views: "150K views", time: "1 week ago", duration: "08:15", color: "#0A8FDC", avatar: "GC" },
    { title: "10 CSS Tricks You Still Don't Know", channel: "StyleCode", views: "510K views", time: "3 weeks ago", duration: "14:30", color: "#ff9800", avatar: "SC" },
  ];

  return (
    <Box className={classes.root}>
      <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: 20 }}>Recommended Videos</Typography>
      <Grid container spacing={3}>
        {videos.map((video, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card}>
              <Box className={classes.mediaPlaceholder} style={{ background: `linear-gradient(45deg, ${video.color} 30%, #313541 90%)` }}>
                <Icon style={{ color: '#fff', fontSize: 36 }}>play_circle_filled</Icon>
                <span className={classes.duration}>{video.duration}</span>
              </Box>
              <CardContent className={classes.content}>
                <Avatar style={{ backgroundColor: video.color, width: 36, height: 36 }}>{video.avatar}</Avatar>
                <Box className={classes.textContainer}>
                  <Typography variant="body1" className={classes.title}>{video.title}</Typography>
                  <Typography variant="body2" color="textSecondary" style={{ marginTop: 4 }}>{video.channel}</Typography>
                  <Typography variant="caption" color="textSecondary">{video.views} • {video.time}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PreviewComponent;
