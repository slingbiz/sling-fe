import {setWidgets, getAllWidgets} from 'sling-core';
import axios from 'axios';
import widgetListUtil from './widgetList';
import {STOREFRONT_AUTH_HEADERS} from './constants/Services';

const {listWidgetsFromResponse, shouldApplyWidgetList} = widgetListUtil;

export async function hydrateStorefrontWidgets() {
  const existing = typeof getAllWidgets === 'function' ? getAllWidgets() : {};
  const existingCount =
    existing && typeof existing === 'object' ? Object.keys(existing).length : 0;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.sling.biz';
  try {
    const response = await axios.post(
      `${apiUrl}/v1/frontend/getWidgets`,
      {size: 1000},
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...STOREFRONT_AUTH_HEADERS,
        },
      },
    );
    const list = listWidgetsFromResponse(response.data);
    if (!shouldApplyWidgetList(list)) {
      return existingCount;
    }
    if (typeof setWidgets === 'function') {
      setWidgets(list);
    }
    return list.length;
  } catch (_err) {
    return existingCount;
  }
}
