import dynamic from 'next/dynamic';
import React from 'react';
import {Loader} from '../index';

//Marked Important
export default function asyncComponent(importComponent) {
  return dynamic(importComponent, {
    loading: () => <Loader />,
  });
}
