import dynamic from 'next/dynamic';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import {RenderTree, getAllWidgets} from 'sling-core';
import ErrorSling from '../ErrorSling';
import HomeComponent from '../Home';
import RenderTreeGuard from '../RenderTreeGuard';
import {layoutHasPaint} from '../../utils/layoutHasPaint';
import {dropUnrenderableCells} from '../../utils/safeLayout';

const useStyles = makeStyles(() => ({
  // bodyMain: {padding: '20px 20px 0'},
  appMain: {},
}));

const GlobalPage = () => {
  const classes = useStyles();
  const [isClient, setIsClient] = useState(false);
  // Check if the component is mounted on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);
  const layoutInitial = useSelector(({layout}) => layout);
  const {layoutConfig, pageTemplate} = layoutInitial;
  const layout = layoutConfig?.[pageTemplate];

  if (!layout) {
    return <ErrorSling statusCode={404} />;
  }
  if (!layoutHasPaint(layout)) {
    return <HomeComponent />;
  }
  const registry = typeof getAllWidgets === 'function' ? getAllWidgets() : {};
  const safeLayout = dropUnrenderableCells(layout, registry);

  return isClient ? (
    <Box className={classes.appMain}>
      <Box className={classes.bodyMain}>
        <RenderTreeGuard
          fallback={
            <RenderTreeGuard fallback={<ErrorSling />}>
              <RenderTree layout={safeLayout} />
            </RenderTreeGuard>
          }>
          <RenderTree layout={layout} />
        </RenderTreeGuard>
      </Box>
    </Box>
  ) : null;
};

// Disable SSR for GlobalPage
export default dynamic(() => Promise.resolve(GlobalPage), {ssr: false});
