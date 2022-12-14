import 'react-i18next';

import common from '../public/locales/en/common.json';
import login from '../public/locales/en/login.json';
import home from '../public/locales/en/home.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    keySeparator: '.';
    nsSeparator: '.';
    resources: {
      common: typeof common;
      login: typeof login;
      home: typeof home;
    };
  }
}
