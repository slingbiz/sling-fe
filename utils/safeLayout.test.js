const {test} = require('node:test');
const assert = require('node:assert/strict');
const {
  isRenderableComponent,
  componentFromRegistry,
  dropUnrenderableCells,
} = require('./safeLayout');

test('plain objects are not renderable components', () => {
  assert.equal(isRenderableComponent({default: undefined}), false);
  assert.equal(isRenderableComponent({key: 'ProductFilters'}), false);
  assert.equal(isRenderableComponent(null), false);
});

test('functions and forward refs are renderable', () => {
  assert.equal(isRenderableComponent(() => null), true);
  assert.equal(
    isRenderableComponent({$$typeof: Symbol.for('react.forward_ref')}),
    true,
  );
});

test('registry metadata without a component does not resolve', () => {
  const registry = {
    ProductFilters: {key: 'ProductFilters', type: 'block'},
  };
  assert.equal(componentFromRegistry(registry, 'ProductFilters'), null);
});

test('missing widget cells are dropped so createElement never gets an object', () => {
  const layout = {
    root: {
      body: {
        rows: [
          {
            cells: [
              {key: 'ProductFilters', type: 'block', payload: {}},
              {key: 'GoneWidget', type: 'block', payload: {}},
            ],
          },
        ],
      },
    },
  };
  const registry = {
    ProductFilters: {component: () => null, key: 'ProductFilters'},
    GoneWidget: {key: 'GoneWidget', type: 'block'},
  };
  const next = dropUnrenderableCells(layout, registry);
  assert.deepEqual(
    next.root.body.rows[0].cells.map((cell) => cell.key),
    ['ProductFilters'],
  );
});
