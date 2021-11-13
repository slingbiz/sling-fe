import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Blocks from '../../blocks/index';
import Widgets from '../../widgets/index';
import Wrappers from '../../wrappers/index';
import ComponentBlocks from '../../components/index';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const NodeTypeMap = {
  componentBlock: ComponentBlocks,
  widget: Widgets,
  block: Blocks,
};

const RenderTree = (props) => {
  const {layout} = props;
  const tree = layout?.root;
  const elements = [];
  const processRows = (rows) => {
    const tmpElements = [];
    rows?.map(({cells, config}) => {
      if (config?.wrapper) {
        const Wrapper = Wrappers[config.wrapper];
        if (Wrapper) {
          tmpElements.push(
            <Wrapper>
              {cells?.map((cell) => {
                const {rows, key, payload, type} = cell;
                const {
                  style,
                  muiWidths,
                  props: widgetProps,
                  muiHidden,
                } = payload;
                if (key) {
                  let CellComponent = Blocks[key];
                  if (type) {
                    CellComponent = NodeTypeMap[type][key];
                  }

                  if (CellComponent) {
                    if (muiHidden) {
                      console.log('[muiHidden]', muiHidden, key);
                      return (
                        <Hidden {...muiHidden} >
                          <Grid item display={'flex'} flex={1} {...muiWidths}>
                            <CellComponent
                              parentProps={props}
                              widgetProps={widgetProps}
                              key={key}
                              payload={payload}
                            />
                          </Grid>
                        </Hidden>
                      );
                    }

                    return (
                      <Grid item display={'flex'} flex={1} {...muiWidths}>
                        <CellComponent
                          parentProps={props}
                          widgetProps={widgetProps}
                          key={key}
                          payload={payload}
                        />
                      </Grid>
                    );
                  }
                }
                if (rows) {
                  if (muiHidden) {
                    return (
                      <Hidden {...muiHidden}>
                        <Grid
                          item
                          {...muiWidths}
                          display={'flex'}
                          flexDirection={'column'}
                          justifyContent={'center'}
                          alignItems={'center'}>
                          <Box
                            // container
                            spacing={2}
                            justifyContent={'center'}
                            width={'auto'}>
                            {processRows(rows)}
                          </Box>
                        </Grid>
                      </Hidden>
                    );
                  }
                  return (
                    <Grid
                      item
                      {...muiWidths}
                      display={'flex'}
                      flexDirection={'column'}
                      justifyContent={'center'}
                      alignItems={'center'}>
                      <Box
                        // container
                        spacing={2}
                        justifyContent={'center'}
                        width={'auto'}>
                        {processRows(rows)}
                      </Box>
                    </Grid>
                  );
                }
              })}
            </Wrapper>,
          );
        }
      }
    });
    return tmpElements;
  };

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      {() => {
        Object.keys(tree).map((section) => {
          console.log(section, '@@@section@@@');
          const rows = tree[section].rows;
          elements.push(processRows(rows));
        });

        return elements;
      }}
    </Box>
  );
};

RenderTree.propTypes = {
  layout: PropTypes.object,
};
export default RenderTree;
