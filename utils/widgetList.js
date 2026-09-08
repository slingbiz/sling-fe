function listWidgetsFromResponse(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }
  const nested = payload && payload.widgets;
  if (Array.isArray(nested)) {
    return nested;
  }
  if (nested && Array.isArray(nested.widgets)) {
    return nested.widgets;
  }
  if (payload && Array.isArray(payload.data)) {
    return payload.data;
  }
  return [];
}

function shouldApplyWidgetList(list) {
  return Array.isArray(list) && list.length > 0;
}

module.exports = {
  listWidgetsFromResponse,
  shouldApplyWidgetList,
};
