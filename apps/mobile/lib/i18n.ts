import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'expo-localization';

import en from './translations/en';

const deviceLanguage = getLocales()[0]?.languageCode ?? 'en';

// `.use()` is i18next middleware chaining, not the package's named `use` export.
// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources: {en: {translation: en}},
  lng: deviceLanguage,
  fallbackLng: 'en',
  interpolation: {escapeValue: false},
});

export default i18n;
