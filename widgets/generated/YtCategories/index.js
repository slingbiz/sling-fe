import React from 'react';
import {Box, Chip} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1.5, 2),
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    gap: theme.spacing(1),
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
  },
  chip: {
    fontWeight: 500,
    cursor: 'pointer',
  }
}));

const PreviewComponent = () => {
  const classes = useStyles();
  const categories = [
    "All", "Web Development", "Live Streams", "Gaming", "Lo-Fi Music", 
    "Tech Reviews", "Podcasts", "Cooking", "Travel Vlogs", "Design", "Machine Learning"
  ];

  return (
    <Box className={classes.root}>
      {categories.map((cat, index) => (
        <Chip
          key={index}
          label={cat}
          color={index === 0 ? "primary" : "default"}
          className={classes.chip}
          onClick={() => {}}
        />
      ))}
    </Box>
  );
};

export default PreviewComponent;
