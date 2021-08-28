import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {useStore} from '../redux/store';
import ContextProvider from '../@sling/utility/ContextProvider';
import SlingThemeProvider from '../@sling/utility/SlingThemeProvider';
import SlingStyleProvider from '../@sling/utility/SlingStyleProvider';
import LocaleProvider from '../@sling/utility/LocaleProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/index.css';
import '../@sling/services/index';
import AuthRoutes from '../@sling/utility/AuthRoutes';
import PageMeta from '../@sling/core/PageMeta';
import {default as defaultStaticConfig} from '../@sling/utility/ContextProvider/defaultConfig';
import {
  GET_INIT_PROPS,
  CLIENT_KEY_SECRET,
  CLIENT_ID,
} from '../shared/constants/Services';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const MyApp = ({
  Component,
  pageProps,
  pageTemplate,
  initConfig,
  layoutConfig,
  routeConstants,
  apiResponse,
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

  return (
    <React.Fragment>
      <PageMeta />
      <ContextProvider initConfig={initConfig}>
        <Provider store={store}>
          <SlingThemeProvider>
            <SlingStyleProvider>
              <LocaleProvider>
                <AuthRoutes>
                  <CssBaseline />
                  <Component />
                </AuthRoutes>
              </LocaleProvider>
            </SlingStyleProvider>
          </SlingThemeProvider>
        </Provider>
      </ContextProvider>
    </React.Fragment>
  );
};

const getHeaders = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    license: CLIENT_KEY_SECRET,
    client: CLIENT_ID,
  };
};

MyApp.getInitialProps = async (appContext) => {
  let response = {};
  const {ctx} = appContext;
  const {pathname, query, asPath} = ctx;

  try {
    //Fetch initial Layout based on url.
    response = await axios({
      url: `${GET_INIT_PROPS}`,
      method: 'POST',
      headers: getHeaders(),
      data: {pathname, query, asPath},
    });
    console.log(response.data, '@_app.js response');
    response = response.data;
  } catch (e) {
    console.log('[MyApp.getInitialProps] - Message', e.message);

    response = {
      initConfigData: defaultStaticConfig,
      layoutConfig: {},
      routeConstants: {},
      apiResponse: {},
      pageTemplate: '',
    };
  }

  return response;
};

export default MyApp;
