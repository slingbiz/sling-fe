import React from 'react';

const processProps = (ComposedComponent) => (props) => {
  return <ComposedComponent {...props} />;
};

export default processProps;
