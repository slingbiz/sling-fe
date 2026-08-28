const PLACEHOLDER_LICENSES = new Set([
  'undefined',
  'null',
  'your-sling-secret-key',
]);
const PLACEHOLDER_CLIENTS = new Set([
  'undefined',
  'null',
  'your@email.id',
  'your@email.com',
]);

function isUsableStorefrontValue(value, placeholders) {
  const v = String(value ?? '').trim();
  if (!v) return false;
  return !placeholders.has(v.toLowerCase());
}

function storefrontAuthHeaders(env = process.env) {
  const license = env.NEXT_PUBLIC_CLIENT_KEY_SECRET;
  const client = env.NEXT_PUBLIC_CLIENT_ID;
  if (
    !isUsableStorefrontValue(license, PLACEHOLDER_LICENSES) ||
    !isUsableStorefrontValue(client, PLACEHOLDER_CLIENTS)
  ) {
    return {};
  }
  return {
    license: String(license).trim(),
    client: String(client).trim(),
  };
}

module.exports = {
  PLACEHOLDER_CLIENTS,
  PLACEHOLDER_LICENSES,
  isUsableStorefrontValue,
  storefrontAuthHeaders,
};
