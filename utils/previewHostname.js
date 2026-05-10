/**
 * Must stay aligned with sling-api PREVIEW_FRONTEND_BASE_DOMAIN / PREVIEW_SUBDOMAIN_LABEL.
 */

export function canonicalHostname(headerValue) {
  if (!headerValue || typeof headerValue !== 'string') return '';

  let raw = headerValue.split(',')[0].trim();
  raw = raw.split(':')[0].trim();

  return raw.toLowerCase();
}

function escapeDots(segment) {
  return segment.replace(/\./g, '\\.');
}

/**
 * Matches wildcard DNS: <slug>.preview.<baseDomain>.
 * During migration also accepts legacy preview.<slug>.<baseDomain>.
 */
export function extractTenantSlugFromPreviewHostname(hostname) {
  const h = canonicalHostname(hostname);
  if (!h) return null;

  const previewLabel = (
    process.env.PREVIEW_SUBDOMAIN_LABEL || 'preview'
  ).toLowerCase();
  const baseDomain = (
    process.env.PREVIEW_FRONTEND_BASE_DOMAIN ||
    process.env.NEXT_PUBLIC_PREVIEW_FRONTEND_BASE_DOMAIN ||
    'sling.biz'
  ).toLowerCase();

  const newRe = new RegExp(
    `^([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)\\.${escapeDots(previewLabel)}\\.${escapeDots(baseDomain)}$`,
  );
  const legacyRe = new RegExp(
    `^${escapeDots(previewLabel)}\\.([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)\\.${escapeDots(baseDomain)}$`,
  );

  const newM = h.match(newRe);
  const legacyM = h.match(legacyRe);
  const slug = (newM?.[1] || legacyM?.[1] || '').toLowerCase();
  return slug || null;
}

export function storefrontHostnameFromNodeRequest(req) {
  const raw =
    req?.headers?.['x-sling-origin-host'] ||
    req?.headers?.['x-forwarded-host'] ||
    req?.headers?.host ||
    '';

  return canonicalHostname(raw);
}
