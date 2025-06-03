import { UserConfig } from 'next-i18next';

const i18nConfig: UserConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
  },
  localePath: './public/locales',
};

export default i18nConfig;