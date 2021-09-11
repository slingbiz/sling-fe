const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    return {
      basePath: '/frontend',
      assetPrefix: 'frontend',
      distDir: 'build',
      env: {
        FIREBASE_API_KEY: 'AIzaSyAzL_2jiVBhmiIUFGs2z6-cDR-Hgoedh3k',
        FIREBASE_APP_ID: '1:369173776768:web:895ded916749deebd31965',
        FIREBASE_MESSAGING_SENDER_ID: '369173776768',
        imageBasePath: '/frontend',
        FIREBASE_MEASUREMENT_ID: 'G-976YVMRB4R',
      },
    };
  }
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    const rewrites = () => {
      return [
        {
          source: '/api/:slug*',
          destination: 'http://localhost:10001/:slug*',
        },
      ];
    };
    return {
      rewrites,
      distDir: 'build',
      env: {
        FIREBASE_API_KEY: 'AIzaSyAzL_2jiVBhmiIUFGs2z6-cDR-Hgoedh3k',
        FIREBASE_APP_ID: '1:369173776768:web:895ded916749deebd31965',
        FIREBASE_MESSAGING_SENDER_ID: '369173776768',
        imageBasePath: 'http://localhost:4087',
        FIREBASE_MEASUREMENT_ID: 'G-976YVMRB4R',
      },
    };
  }

  return {
    // optimizeFonts: false,
    // useFileSystemPublicRoutes: false,
    // basePath: '/',
    // assetPrefix: 'frontend',
    // serverRuntimeConfig: {},
    // publicRuntimeConfig: {},
    distDir: 'build',
    env: {
      FIREBASE_API_KEY: 'AIzaSyAzL_2jiVBhmiIUFGs2z6-cDR-Hgoedh3k',
      FIREBASE_APP_ID: '1:369173776768:web:895ded916749deebd31965',
      FIREBASE_MESSAGING_SENDER_ID: '369173776768',
      imageBasePath: '../',
      FIREBASE_MEASUREMENT_ID: 'G-976YVMRB4R',
    },
  };
};
