import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {useStore} from '../redux/store';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/index.css';
import '../utils/services/index';
import '../widgets/index';
import '../blocks/index';
import '../components/index';

import {
  GET_INIT_PROPS,
  STOREFRONT_AUTH_HEADERS,
} from '../utils/constants/Services';
import axios from 'axios';
import AppLocale from '../utils/localization';
import SlingThemeProvider from '../utils/context/SlingThemeProvider';
import SlingStyleProvider from '../utils/context/SlingStyleProvider';
import ContextProvider from '../utils/context/ContextProvider';
import PageMeta from '../utils/context/PageMeta';
import LocaleProvider from '../utils/context/LocaleProvider';
import defaultConfig from '../utils/context/defaultConfig';
import {mergeInitConfig} from '../utils/context/mergeInitConfig';

const MyApp = ({
  Component,
  pageProps,
  pageTemplate,
  initConfig,
  layoutConfig,
  routeConstants,
  apiResponse,
  error,
}) => {
  const store = useStore({
    ...pageProps,
    layout: {layoutConfig, pageTemplate},
    routeConstants,
    ssrApi: apiResponse,
  });

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  if (error) {
    // return <Error status={500} />;
  }
  const mergedInitConfig = mergeInitConfig(initConfig, defaultConfig);
  const contextProps = {
    initConfig: mergedInitConfig,
    layout: {layoutConfig, pageTemplate},
    routeConstants,
    ssrApi: apiResponse,
  };
  return (
    <React.Fragment>
      <PageMeta />
      <ContextProvider {...contextProps}>
        <Provider store={store}>
          <SlingThemeProvider appLocale={AppLocale} theme={mergedInitConfig}>
            <SlingStyleProvider>
              <LocaleProvider appLocale={AppLocale}>
                <CssBaseline />
                <Component />
              </LocaleProvider>
            </SlingStyleProvider>
          </SlingThemeProvider>
        </Provider>
      </ContextProvider>
    </React.Fragment>
  );
};

const resolveBootstrapPostUrl = (ctx) => {
  if (typeof window !== 'undefined') {
    return `${window.location.origin}/api/fe-bootstrap`;
  }

  const req = ctx.req;
  if (!req?.headers) {
    return `${GET_INIT_PROPS}`;
  }

  const fwd = req.headers['x-forwarded-host'];
  const hostFromForwarded =
    typeof fwd === 'string' && fwd.trim() !== ''
      ? fwd.split(',')[0].trim()
      : '';

  const host =
    hostFromForwarded ||
    (typeof req.headers.host === 'string'
      ? req.headers.host.split(',')[0].trim()
      : '');
  const protoHeader = req.headers['x-forwarded-proto']?.split(',')[0]?.trim();
  const proto =
    protoHeader === 'http' || protoHeader === 'https' ? protoHeader : 'https';

  if (!host) {
    return `${GET_INIT_PROPS}`;
  }

  return `${proto}://${host}/api/fe-bootstrap`;
};

MyApp.getInitialProps = async (appContext) => {
  let response = {};
  const {ctx} = appContext;
  const {pathname, query, asPath} = ctx;

  try {
    const bootstrapUrl = resolveBootstrapPostUrl(ctx);
    const isDirectInit = bootstrapUrl === `${GET_INIT_PROPS}`;

    const axiosConfig = isDirectInit
      ? {
          url: `${GET_INIT_PROPS}`,
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...STOREFRONT_AUTH_HEADERS,
          },
          data: {pathname, query, asPath},
        }
      : {
          url: bootstrapUrl,
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          data: {pathname, query, asPath},
        };

    response = await axios(axiosConfig);
    response = response.data;
  } catch (e) {
    console.log('[MyApp.getInitialProps] - Message', e.message);

    response = {
      initConfig: defaultConfig,
      layoutConfig: {},
      routeConstants: {},
      apiResponse: {},
      pageTemplate: '',
      error: true,
    };
  }

  return response;
};

export default MyApp;
