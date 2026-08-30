import {registerWidget} from 'sling-core';
import dynamic from 'next/dynamic';

registerWidget(
  'Default Header User',
  dynamic(() => import('./HeaderUser'), {ssr: false}),
  {
    key: 'DefaultHeaderUser',
    description: 'header user',
    ownership: 'private',
    type: 'block',
    icon: 'account_box',
    props: [],
    availableToAllPages: true,
    config: {},
    requiredProps: [],
  },
);

registerWidget(
  'White Logo',
  dynamic(() => import('./AppLogoWhite'), {ssr: false}),
  {
    key: 'WhiteLogo',
    type: 'block',
    description:
      'Wrapper component which displays White version of the logo & name',
    ownership: 'private',
    icon: 'rounded_corner',
    props: [],
    availableToAllPages: true,
    config: {},
    requiredProps: [],
  },
);

registerWidget(
  'Shows User Info',
  dynamic(() => import('./UserInfo'), {ssr: false}),
  {
    key: 'UserInfo',
    type: 'block',
    description: 'React Block to display User info.',
    ownership: 'private',
    icon: 'verified_user',
    props: [],
    availableToAllPages: true,
    config: {},
    requiredProps: [],
  },
);
