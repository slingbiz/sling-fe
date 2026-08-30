import React from 'react';
import SlingMissingPage from '../SlingMissingPage';

const localApi = String(process.env.NEXT_PUBLIC_API_URL || '').includes(
  'localhost',
);

const ErrorSling = () => {
  return (
    <SlingMissingPage title='This page is not here'>
      <p style={{margin: '0 0 12px'}}>
        No published storefront route matches this URL. Add one in Studio, or go
        home.
      </p>
      <p style={{margin: 0, fontSize: 14, color: '#4a5d73'}}>
        {localApi
          ? 'On this machine: sign up in Studio, then refresh. A second company needs its key from Settings → Keys in sling-fe/.env.'
          : 'If the whole site is empty, check the storefront API keys in Settings → Keys.'}
      </p>
    </SlingMissingPage>
  );
};

export default ErrorSling;
