import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}>
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='scrollable'
          scrollButtons='auto'
          aria-label='scrollable auto tabs example'>
          <Tab label='GridItem One' {...a11yProps(0)} />
          <Tab label='GridItem Two' {...a11yProps(1)} />
          <Tab label='GridItem Three' {...a11yProps(2)} />
          <Tab label='GridItem Four' {...a11yProps(3)} />
          <Tab label='GridItem Five' {...a11yProps(4)} />
          <Tab label='GridItem Six' {...a11yProps(5)} />
          <Tab label='GridItem Seven' {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        GridItem One
      </TabPanel>
      <TabPanel value={value} index={1}>
        GridItem Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        GridItem Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        GridItem Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        GridItem Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        GridItem Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        GridItem Seven
      </TabPanel>
    </div>
  );
}
