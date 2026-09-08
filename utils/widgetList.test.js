const {test} = require('node:test');
const assert = require('node:assert/strict');
const {listWidgetsFromResponse, shouldApplyWidgetList} = require('./widgetList');

test('reads a flat {widgets, tc} payload', () => {
  const list = listWidgetsFromResponse({
    widgets: [{key: 'YtHeader'}, {key: 'YtCreators'}],
    tc: 2,
  });
  assert.equal(list.length, 2);
  assert.equal(list[0].key, 'YtHeader');
});

test('reads a nested widgets.widgets payload', () => {
  const list = listWidgetsFromResponse({
    widgets: {widgets: [{key: 'HeroBanner'}], tc: 1},
  });
  assert.equal(list.length, 1);
  assert.equal(list[0].key, 'HeroBanner');
});

test('empty parse is not applied so a good registry is not wiped', () => {
  assert.deepEqual(listWidgetsFromResponse({tc: 0}), []);
  assert.equal(shouldApplyWidgetList([]), false);
  assert.equal(shouldApplyWidgetList(null), false);
  assert.equal(shouldApplyWidgetList([{key: 'A'}]), true);
});
