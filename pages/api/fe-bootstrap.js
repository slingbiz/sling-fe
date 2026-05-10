import axios from 'axios';
import {
  CLIENT_ID,
  CLIENT_KEY_SECRET,
  GET_INIT_PROPS,
} from '../../utils/constants/Services';
import {
  extractTenantSlugFromPreviewHostname,
  storefrontHostnameFromNodeRequest,
} from '../../utils/previewHostname';

async function proxyToSlingApi({pathname, query, asPath, incomingReq}) {
  const hostOnly = storefrontHostnameFromNodeRequest(incomingReq);
  const previewSlug = extractTenantSlugFromPreviewHostname(hostOnly);

  const serverSecretRaw =
    typeof process.env.SLING_PREVIEW_INIT_SECRET !== 'undefined'
      ? process.env.SLING_PREVIEW_INIT_SECRET
      : process.env.FE_SLING_PREVIEW_INIT_SECRET;

  const serverSecret =
    typeof serverSecretRaw === 'string' && serverSecretRaw.length > 0
      ? serverSecretRaw
      : null;

  const usePreviewAuth = Boolean(serverSecret && previewSlug);

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (usePreviewAuth) {
    headers['x-sling-preview-init-secret'] = serverSecret;
    headers['x-sling-origin-host'] = hostOnly;
  } else {
    headers.license = CLIENT_KEY_SECRET;
    headers.client = CLIENT_ID;
  }

  return axios.post(
    GET_INIT_PROPS,
    {pathname, query, asPath},
    {headers, timeout: 30000},
  );
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const {pathname, query, asPath} =
    typeof req.body === 'object' && req.body ? req.body : {};

  try {
    const response = await proxyToSlingApi({
      pathname,
      query,
      asPath,
      incomingReq: req,
    });

    res.status(200).json(response.data);
  } catch (e) {
    const status = e.response?.status;
    const payload =
      typeof e.response?.data !== 'undefined'
        ? e.response.data
        : {error: true, message: e.message};
    const outStatus =
      typeof status === 'number' && status >= 400 && status < 600
        ? status
        : 502;
    // eslint-disable-next-line no-console
    console.error('[fe-bootstrap]', e.message);

    res.status(outStatus).json(payload);
  }
}
