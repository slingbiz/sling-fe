import React from 'react';
import SlingMissingPage from '../SlingMissingPage';

const Error404 = () => {
  return (
    <SlingMissingPage title='This page is not here'>
      That URL does not match a published storefront page. Go home, or open
      another link.
    </SlingMissingPage>
  );
};

export default Error404;
