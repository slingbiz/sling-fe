import React from 'react';
import {useSelector} from 'react-redux';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import Error from 'next/error';
import {RenderTree} from 'sling-fe-core';
import Blocks from '../../blocks';
import ComponentBlocks from '../index';
import Widgets from '../../widgets';

const useStyles = makeStyles((theme) => ({
  bodyMain: {padding: '20px 20px 0'},
  appMain: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    paddingTop: 56,
    backgroundColor: 'white',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 70,
    },
    '&.appMainFooter': {
      '& $mainContainerFull': {},
    },
    '&.appMainFixedFooter': {
      paddingBottom: 48,
      [theme.breakpoints.up('xl')]: {
        paddingBottom: 58,
      },
      '& $mainContainerFull': {},
    },
  },
}));

const GlobalPage = () => {
  const classes = useStyles();
  console.log(RenderTree, 'RenderTree');
  const {layoutConfig, pageTemplate} = useSelector(({layout}) => layout);
  const layout = layoutConfig[pageTemplate];

  if (!layout) {
    return <Error statusCode={'404'} />;
  }
  return (
    <Box className={classes.appMain}>
      <Box className={classes.bodyMain}>
        <RenderTree
          layout={layout}
          Blocks={Blocks}
          ComponentBlocks={ComponentBlocks}
          Widgets={Widgets}
        />
      </Box>
    </Box>
  );
};

export default GlobalPage;