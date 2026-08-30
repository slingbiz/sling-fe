const isRenderableComponent = (value) => {
  if (!value) {
    return false;
  }
  if (typeof value === 'function') {
    return true;
  }
  if (typeof value === 'object' && value.$$typeof) {
    return true;
  }
  return false;
};

const componentFromRegistry = (registry, key) => {
  if (!key || !registry) {
    return null;
  }
  const entry = registry[key];
  if (!entry) {
    return null;
  }
  if (isRenderableComponent(entry.component)) {
    return entry.component;
  }
  if (isRenderableComponent(entry)) {
    return entry;
  }
  return null;
};

const filterCells = (cells, registry) => {
  if (!Array.isArray(cells)) {
    return cells;
  }
  return cells
    .map((cell) => {
      const next = {...cell};
      if (next.rows) {
        next.rows = filterRows(next.rows, registry);
      }
      return next;
    })
    .filter((cell) => {
      if (cell.rows && cell.rows.length) {
        return true;
      }
      if (!cell.key) {
        return true;
      }
      return Boolean(componentFromRegistry(registry, cell.key));
    });
};

const filterRows = (rows, registry) => {
  if (!Array.isArray(rows)) {
    return rows;
  }
  return rows
    .map((row) => ({
      ...row,
      cells: filterCells(row.cells, registry),
    }))
    .filter((row) => Array.isArray(row.cells) && row.cells.length > 0);
};

const dropUnrenderableCells = (layout, registry) => {
  if (!layout || !layout.root) {
    return layout;
  }
  const root = {};
  Object.keys(layout.root).forEach((section) => {
    const node = layout.root[section] || {};
    root[section] = {
      ...node,
      rows: filterRows(node.rows, registry),
    };
  });
  return {...layout, root};
};

module.exports = {
  isRenderableComponent,
  componentFromRegistry,
  dropUnrenderableCells,
};
