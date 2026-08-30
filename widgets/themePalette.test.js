const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const roots = ['widgets', 'blocks', 'components'].map((dir) =>
  path.join(__dirname, '..', dir),
);

const walk = (dir) => {
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'generated') {
        return [];
      }
      return walk(full);
    }
    if (!entry.name.endsWith('.js') || entry.name.endsWith('.test.js')) {
      return [];
    }
    return [full];
  });
};

test('storefront widgets do not hardcode the old Sling blue', () => {
  const hits = roots.flatMap(walk).flatMap((file) => {
    const src = fs.readFileSync(file, 'utf8');
    if (!src.includes('#0A8FDC')) {
      return [];
    }
    return [`${path.relative(path.join(__dirname, '..'), file)} still has #0A8FDC`];
  });
  assert.deepEqual(hits, []);
});
