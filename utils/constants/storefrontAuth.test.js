const {test} = require('node:test');
const assert = require('node:assert/strict');
const {storefrontAuthHeaders} = require('./storefrontAuth');

test('omits placeholder keys so the API can auto-pick one local company', () => {
  assert.deepEqual(
    storefrontAuthHeaders({
      NEXT_PUBLIC_CLIENT_KEY_SECRET: 'your-sling-secret-key',
      NEXT_PUBLIC_CLIENT_ID: 'your@email.id',
    }),
    {},
  );
  assert.deepEqual(
    storefrontAuthHeaders({
      NEXT_PUBLIC_CLIENT_KEY_SECRET: '',
      NEXT_PUBLIC_CLIENT_ID: '',
    }),
    {},
  );
  assert.deepEqual(
    storefrontAuthHeaders({
      NEXT_PUBLIC_CLIENT_KEY_SECRET: 'abc-123',
      NEXT_PUBLIC_CLIENT_ID: 'you@x.com',
    }),
    {license: 'abc-123', client: 'you@x.com'},
  );
});
