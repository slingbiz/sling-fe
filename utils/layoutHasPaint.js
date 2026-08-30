const layoutHasPaint = (layout) => {
  if (!layout || !layout.root) {
    return false;
  }
  return ['header', 'body', 'footer'].some((section) => {
    const rows = layout.root[section] && layout.root[section].rows;
    return Array.isArray(rows) && rows.length > 0;
  });
};

module.exports = {layoutHasPaint};
